import { repositories } from '../interfaces'

export default class UpdateArticleModule {
  private accountRepository: repositories.Account
  private articleRepository: repositories.Article

  constructor(
    accountRepository: repositories.Account,
    articleRepository: repositories.Article
  ) {
    this.accountRepository = accountRepository
    this.articleRepository = articleRepository
  }

  async call() {}
}
