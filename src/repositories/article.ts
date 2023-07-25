import { repositories } from '../interfaces'
import { ArticleId, Article } from '../models'

class ArticleRepository implements repositories.Article {
  constructor() {}

  async get(id: ArticleId): Promise<Article> {
    return {
      id,
      userId: 1,
      content: '',
      tags: [''],
      createdAt: '',
    }
  }

  async list(): Promise<Article[]> {
    return []
  }

  create(newArticle: Article) {}

  update(existingArticle: Article) {}

  delete(id: ArticleId) {}
}

export default ArticleRepository
