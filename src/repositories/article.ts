import { repositories } from '../interfaces'
import { ArticleId, Article } from '../models'

export class ArticleRepository implements repositories.Article {
  private articles: Article[]

  constructor() {
    this.articles = []
  }

  async get(id: ArticleId): Promise<Article> {
    return {
      id,
      accountId: 1,
      content: '',
      tags: [''],
      createdAt: '',
    }
  }

  async list(): Promise<Article[]> {
    return this.articles
  }

  create(newArticle: Article) {
    this.articles.push(newArticle)
  }

  update(existingArticle: Article) {
    this.articles[existingArticle.id - 1] = existingArticle
  }

  delete(id: ArticleId) {
    this.articles.splice(id - 1, 1)
  }
}
