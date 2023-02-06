import { Injectable } from '@angular/core';
import { Mixin } from "ts-mixer";

import {CategoryApi} from "../api/category.api";
import {AttachmentApi} from "../api/attachment.api";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoadingService} from "./loading.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService extends Mixin(CategoryApi, AttachmentApi) {

  constructor(override http: HttpClient, private router: Router, private loading: LoadingService) {
    super(http);
  }

  apiError(err: HttpErrorResponse) {
    console.log("ERR:: ", err);
    this.loading.status.emit(false);
    switch (err.status) {
      case 401:
        return this.router.navigateByUrl("/login")
      default: {
        return this.router.navigateByUrl("/login");
      }
    }
  }
}
