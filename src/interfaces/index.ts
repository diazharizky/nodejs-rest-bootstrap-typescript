import { User, UserId, Article, ArticleId } from '../models'

export interface UserRepository {
  get(id: UserId): User
  list(): User[]
  create(newUser: User): void
  update(existingUser: User): void
  delete(id: UserId): void
}

export interface ArticleRepository {
  get(id: ArticleId): Article
  list(): Article[]
  create(newArticle: Article): void
  update(existingArticle: Article): void
  delete(id: ArticleId): void
}
