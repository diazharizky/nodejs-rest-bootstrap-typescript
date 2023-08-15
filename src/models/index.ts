export type UserId = number

export type User = {
  id: UserId
  email: string
  username: string
  fullName: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export type ArticleId = number

export type Article = {
  id: ArticleId
  userId: UserId
  content: string
  tags: string[]
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}
