import { repositories, modules } from '../interfaces'

import UserRepository from '../repositories/user'
import ArticleRepository from '../repositories/article'

import CreateArticle from '../modules/createArticle'
import UpdateArticle from '../modules/updateArticle'
import DeleteArticle from '../modules/deleteArticle'

export default class Core {
  userRepository: repositories.User
  articleRepository: repositories.Article

  createArticleModule: modules.CreateArticle
  updateArticleModule: modules.UpdateArticle
  deleteArticleModule: modules.DeleteArticle

  constructor() {
    this.userRepository = new UserRepository()
    this.articleRepository = new ArticleRepository()

    this.createArticleModule = new CreateArticle(
      this.userRepository,
      this.articleRepository
    )

    this.updateArticleModule = new UpdateArticle(
      this.userRepository,
      this.articleRepository
    )

    this.deleteArticleModule = new DeleteArticle(
      this.userRepository,
      this.articleRepository
    )
  }
}
