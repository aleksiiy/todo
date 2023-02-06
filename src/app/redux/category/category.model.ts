import {IAttachment} from "../attachment/attachment.model";

export interface INewCategory {
  name: string // "Home",
  nameIcon: string //"home",
  categoryUrl: string // "home",
  attachments?: IAttachment[]
}

export interface ICategory extends INewCategory{
  readonly id: string //"0ea391ee-58bc-4650-9f28-1d0cc159139e",
}

