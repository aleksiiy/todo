import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {AuthService} from "../../services/auth.service";
import {ICategory, INewCategory} from "../../redux/category/category.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ApiService} from "../../services/api.service";
import * as CategoryActions from "../../redux/category/category.actions";

interface AppState {
  category: ICategory[]
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  categories: Observable<ICategory[]>;
  init: boolean = false
  createCategory: boolean = false;
  dataHeader = [
    {
      icon: 'logout',
      text:'logout',
      url: '',
      action: () => this.logout()
    }];

  constructor(
    private loading: LoadingService,
    private authService: AuthService,
    private store: Store<AppState>,
    private api: ApiService) {
  //
    this.categories = this.store.select('category');

  }

  ngOnInit() {
    setTimeout(() => {
      this.init = true;
    })
    this.api.getCategories().subscribe((res) => {
      this.store.dispatch(new CategoryActions.Load(res.data))
      this.loading.status.emit(false);
    })
  }

  public logout(): void {
    this.authService.logout()
  }

  public saveNewCategory(newCategory: INewCategory) {
    this.loading.status.emit(true);
    this.api.newCategory(newCategory).subscribe((res) => {
      this.store.dispatch(new CategoryActions.Add(res.data));
      this.loading.status.emit(false);
      this.createCategory = false;
    })
  }

}
