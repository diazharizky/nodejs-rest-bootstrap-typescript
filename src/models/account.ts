export type AccountId = number

export type Account = {
  id: AccountId
  email: string
  username: string
  fullName: string
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}
