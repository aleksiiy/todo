import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {LoadingService} from "../../services/loading.service";
import {Store} from "@ngrx/store";
import {ICategory} from "../../redux/category/category.model";
import {IAttachment} from "../../redux/attachment/attachment.model";
import {Observable} from "rxjs";
import * as AttachmentActions from "../../redux/attachment/attachment.actions";
import {ApiService} from "../../services/api.service";

interface ContentState {
  category: ICategory[]
  attachments: IAttachment[]
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  categoryUrl: string = ""
  categories: Observable<ICategory[]>
  attachments: Observable<IAttachment[]>
  constructor(
    private route: ActivatedRoute,
    private loading: LoadingService,
    private store: Store<ContentState>,
    private  api: ApiService) {
    this.categories = this.store.select('category');
    this.attachments = this.store.select('attachments');
  }

  ngOnInit() {
    this.loading.status.emit(true);
    this.route.params.subscribe((params: Params) => {
      this.categoryUrl = params['categoryUrl'];
      this.getCategoryUUID(params['categoryUrl'], (err: string | undefined, uuid: string = "") => {
        if (!err && !!uuid) {
          this.api.showCategory(uuid).subscribe((category) => {
            this.store.dispatch(new AttachmentActions.Load(category.data.attachments))
          });
        }
      });
      this.loading.status.emit(false);
    })
  }

  getCategoryUUID(categoryUrl: string, cb): string {
    this.categories.subscribe((res) => {
      const data = res.filter((category: ICategory) => category.categoryUrl === categoryUrl);
      if (data.length) {
        console.log(1);
        cb(undefined, data[0].id)
      } else {
        console.log(2)
        cb("not found");
      }
    });
    return ""
  }
}
