import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from "../../redux/category/category.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  categories: Observable<ICategory[]>

  items: ICategory[]
  constructor() {}

  ngOnInit() {
    this.categories.subscribe((res) => {
      this.items = res;
    })
  }
}
