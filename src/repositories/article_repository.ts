import { ArticleRepository } from '../interfaces'
import { Article, ArticleId } from '../models'

const repo: ArticleRepository = {
  get: (id: ArticleId): Article => {
    return {}
  },
  list: (): Article[] => {
    return []
  },
  create: (newArticle: Article) => {},
  update: (existingArticle: Article) => {},
  delete: (id: ArticleId) => {},
}

export default repo
