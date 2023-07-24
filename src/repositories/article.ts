import { ArticleRepository } from '../interfaces'
import { Article, ArticleId } from '../models'

const repo: ArticleRepository = {
  get: async (id: ArticleId): Promise<Article> => {
    return {}
  },
  list: async (): Promise<Article[]> => {
    return []
  },
  create: (newArticle: Article) => {},
  update: (existingArticle: Article) => {},
  delete: (id: ArticleId) => {},
}

export default repo
