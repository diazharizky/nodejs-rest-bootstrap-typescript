import { repositories, modules } from '../interfaces'
import UserRepository from '../repositories/user'
import ArticleRepository from '../repositories/article'

class Core {
  userRepository: repositories.User
  articleRepository: repositories.Article

  constructor() {
    this.userRepository = new UserRepository()
    this.articleRepository = new ArticleRepository()
  }
}

export default Core
