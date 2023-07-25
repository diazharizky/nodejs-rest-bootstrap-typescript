import { repositories } from '../interfaces'

export default class DeleteArticleModule {
  userRepository: repositories.User
  articleRepository: repositories.Article

  constructor(
    userRepository: repositories.User,
    articleRepository: repositories.Article
  ) {
    this.userRepository = userRepository
    this.articleRepository = articleRepository
  }

  async call() {}
}
