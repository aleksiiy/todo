import { Injectable } from '@angular/core';
import { Mixin } from "ts-mixer";

import {CategoryApi} from "../api/category.api";
import {AttachmentApi} from "../api/attachment.api";

@Injectable({
  providedIn: 'root'
})
export class ApiService extends Mixin(CategoryApi, AttachmentApi) {
}
