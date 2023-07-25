import { Router } from 'express'
import Core from '../../../core'

class ArticlesController {
  private core: Core

  constructor(core: Core) {
    this.core = core
  }

  router(): Router {
    const router = Router()

    return router
  }
}

export default ArticlesController
