import * as CategoryActionAll from "./category.actions";
import {ICategory, INewCategory} from "./category.model";
import {Add, CategoryActions, GetAttachments, Load} from "./category.actions";

export type Action = CategoryActionAll.All;

// const dd: ICategory = {
//   id: "0ea391ee-58bc-4650-9f28-1d0cc159139e",
//   name: "Home",
//   nameIcon: "home",
//   categoryUrl: "home",
//   attachments: [
//     {
//       id: "63ca4948-e8f0-423f-b84b-81f9a7ca0ffb",
//       type: "folder",
//       icon: "folder",
//       title: "test",
//       description: null,
//       localFileName: null
//     }]
// }

const defaultState: ICategory[] = [];

const newState = (state: ICategory[], newData: ICategory): ICategory[] => {
  return new Array<ICategory>(...state, newData)
}

const loadState = (newData: ICategory[]): ICategory[] => {
  return new Array(...newData)
}

const getAttachments = (state: ICategory[], category: ICategory): ICategory[] => {
  return state;
}

export function categoryReducer(state: ICategory[] = defaultState, action: Action | Load): ICategory[] {
  switch (action.type) {
    case CategoryActions.LOAD_CATEGORIES:
      if (action instanceof Load) {
        return loadState(action.payload);
      }
      return state;
    case CategoryActions.ADD_CATEGORY:
      if(action instanceof Add) {
        return newState(state, action.payload);
      }
      return state;
    case CategoryActions.EDIT_CATEGORY:
      return  state;
    case CategoryActions.REMOVE_CATEGORY:
      return state;
    case CategoryActions.GET_ATTACHMENTS:
      if (action instanceof GetAttachments) {
        return getAttachments(state, action.payload);
      }
      return state
    default: return state;
  }
}
