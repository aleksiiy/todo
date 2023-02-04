export interface INewUser {
  email: string
  password?: string
  icon: string
}

export interface IUser  extends INewUser {
  readonly id: string
}
