import * as AttachmentAll from "./attachment.actions";
import {IAttachment} from "./attachment.model";
import {AttachmentActions} from "./attachment.actions";


type Action = AttachmentAll.All;

const defaultState: IAttachment[] = [];

const newState = (payload): IAttachment[] => {
  return new Array(...payload);
}

export function attachmentReducer(state: IAttachment[] = defaultState, action: Action): IAttachment[] {
  switch (action.type) {
    case AttachmentActions.LOAD_ATTACH:
      return newState(action.payload);
    case AttachmentActions.ADD_ATTACH:
      return state;
    case AttachmentActions.REMOVE_ATTACH:
      return state;
    default: return state;
  }
}
