import { UserId } from './user_model'

export type ArticleId = number

export type Article = {
  id?: ArticleId
  userId?: UserId
  content?: string
  tags?: string[]
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}
