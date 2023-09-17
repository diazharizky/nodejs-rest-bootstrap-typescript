import { Span } from '@opentelemetry/api'
import * as models from '../models'

export namespace repositories {
  export interface Account {
    list(): Promise<models.Account[]>
    get(id: models.AccountId): Promise<models.Account>
    create(newAccount: models.Account): void
    update(existingAccount: models.Account): void
    delete(id: models.AccountId): void
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
