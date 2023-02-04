import {Action} from "@ngrx/store";
import {ICategory} from "./category.model";

export const CategoryActions = {
  LOAD_CATEGORIES: "[CATEGORY] LOAD",
  EDIT_CATEGORY: "[CATEGORY] EDIT",
  ADD_CATEGORY: "[CATEGORY] ADD",
  REMOVE_CATEGORY: "[CATEGORY] REMOVE",
  GET_ATTACHMENTS: "[CATEGORY] GET ATTACHMENTS"
}

export class Load implements Action {
  readonly type = CategoryActions.LOAD_CATEGORIES;
  constructor(public payload: ICategory[]) {
  }
}
export class Edit implements Action {
  readonly type = CategoryActions.EDIT_CATEGORY
  constructor(public payload: ICategory) {}
}

export class Add implements Action {
  readonly type = CategoryActions.ADD_CATEGORY
  constructor(public payload: ICategory) {}
}

export class Remove implements Action {
  readonly type = CategoryActions.REMOVE_CATEGORY
  constructor(public payload: ICategory) {}
}
export class GetAttachments implements Action {
  readonly type = CategoryActions.GET_ATTACHMENTS
  constructor(public payload: ICategory) {}
}

export type All = Edit | Add | Remove | GetAttachments;
