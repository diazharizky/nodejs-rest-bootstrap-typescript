import { UserRepository, ArticleRepository } from '../src/interfaces'
import repositories from '../src/repositories'

type App = {
  userRepository: UserRepository
  articleRepository: ArticleRepository
}

export default (): App => {
  const app: App = {
    userRepository: repositories.User,
    articleRepository: repositories.Article,
  }

  return app
}
