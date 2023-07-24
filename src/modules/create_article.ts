import { Article } from '../models'
import repos from '../repositories'

export default async (newArticle: Article) => {
  const user = await repos.user.get(newArticle.userId!)
}
