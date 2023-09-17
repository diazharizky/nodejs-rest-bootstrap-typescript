import { AccountId } from './account'

export type ArticleId = number

export type Article = {
  id: ArticleId
  accountId: AccountId
  content: string
  tags: string[]
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}
