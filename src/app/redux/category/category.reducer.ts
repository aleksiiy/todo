import * as CategoryActionAll from "./category.actions";
import {ICategory} from "./category.model";
import {Add, CategoryActions, Load} from "./category.actions";

export type Action = CategoryActionAll.All;

const defaultState: ICategory[] = [];

const newState = (state: ICategory[], newData: ICategory): ICategory[] => {
  return new Array<ICategory>(...state, newData)
}

const loadState = (newData: ICategory[]): ICategory[] => {
  return new Array(...newData)
}

export function categoryReducer(state: ICategory[] = defaultState, action: Action | Load): ICategory[] | string {
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
    default: return state;
  }
}
