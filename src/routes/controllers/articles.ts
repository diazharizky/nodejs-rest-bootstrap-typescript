import { Router, Request, Response } from 'express'
import Core from '../../core'
import { DefaultResponse } from '../responses'

class ArticlesController {
  private core: Core

  constructor(core: Core) {
    this.core = core
  }

  router(): Router {
    const r = Router()

    r.post('/', this.create())

    return r
  }

  create(): (req: Request, res: Response) => void {
    return async (_: Request, res: Response) => {
      const resp = DefaultResponse

      res.status(200).json(resp)
    }
  }
}

export default ArticlesController
