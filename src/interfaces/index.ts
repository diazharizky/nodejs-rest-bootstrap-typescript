import { User, UserId, Article, ArticleId } from '../models'

export interface UserRepository {
  get(id: UserId): Promise<User>
  list(): Promise<User[]>
  create(newUser: User): Promise<void>
  update(existingUser: User): void
  delete(id: UserId): void
}

export interface ArticleRepository {
  get(id: ArticleId): Promise<Article>
  list(): Promise<Article[]>
  create(newArticle: Article): void
  update(existingArticle: Article): void
  delete(id: ArticleId): void
}
