import {Action} from "@ngrx/store";
import {IAttachment, INewAttachment} from "./attachment.model";

export const AttachmentActions = {
  LOAD_ATTACH: "[ATTACH] LOAD",
  ADD_ATTACH: "[ATTACH] ADD",
  REMOVE_ATTACH: "[ATTACH] REMOVE"
}


export class Load implements Action {
  readonly type = AttachmentActions.LOAD_ATTACH
  constructor(public payload: IAttachment[]) {}
}

export class Add implements Action {
  readonly type = AttachmentActions.ADD_ATTACH
  constructor(public payload: INewAttachment) {}
}

export type All = Load | Add;
