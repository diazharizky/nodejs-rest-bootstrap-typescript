import { Span } from '@opentelemetry/api'
import * as models from '../models'

export namespace repositories {
  export interface User {
    list(): Promise<models.User[]>
    get(id: models.UserId): Promise<models.User>
    create(newUser: models.User): void
    update(existingUser: models.User): void
    delete(id: models.UserId): void
  }

  export interface Article {
    list(): Promise<models.Article[]>
    get(id: models.ArticleId): Promise<models.Article>
    create(newArticle: models.Article): void
    update(existingArticle: models.Article): void
    delete(id: models.ArticleId): void
  }
}

export namespace modules {
  export interface CreateArticle {
    call(traceSpan: Span): Promise<void>
  }

  export interface UpdateArticle {
    call(traceSpan: Span): Promise<void>
  }

  export interface DeleteArticle {
    call(traceSpan: Span): Promise<void>
  }
}
