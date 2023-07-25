import UserRepository from '../src/repositories/user'
import ArticleRepository from '../src/repositories/article'
import CreateArticleModule from '../src/modules/createArticle'

describe('Given create article module tests', () => {
  describe('When successfully create article using the module', () => {
    it('Should returns no error', () => {
      const userRepo = new UserRepository()
      const articleRepo = new ArticleRepository()
      const createArticleModule = new CreateArticleModule(userRepo, articleRepo)
      createArticleModule.call()
    })
  })
})
