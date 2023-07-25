import { repositories } from '../interfaces'
import { ArticleId, Article } from '../models'

class ArticleRepository implements repositories.Article {
  constructor() {}

  async get(id: ArticleId): Promise<Article> {
    return {}
  }

  async list(): Promise<Article[]> {
    return []
  }

  async create(newArticle: Article) {}

  async update(existingArticle: Article) {}

  async delete(id: ArticleId) {}
}

export default ArticleRepository
