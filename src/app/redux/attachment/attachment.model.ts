type typeAttachment = "files" | "folder" | "note";

export interface IAttachment {
  readonly id: string // "63ca4948-e8f0-423f-b84b-81f9a7ca0ffb",
  readonly type: typeAttachment // "folder",
  icon?: string // "folder",
  "title": string // "test",
  description?: string // null,
  localFileName?: string // null
  attachmentsChildren?: IAttachment[]
}
