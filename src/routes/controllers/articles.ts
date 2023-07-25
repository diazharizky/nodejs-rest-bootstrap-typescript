import { Router, Request, Response } from 'express'
import Core from '../../core'
import { DefaultResponse } from '../responses'

export const userIdParam = 'userId'

class ArticlesController {
  private core: Core

  constructor(core: Core) {
    this.core = core
  }

  router(): Router {
    const r = Router({ mergeParams: true })

    r.get('/:id', this.get())
    r.post('/', this.create())

    return r
  }

  get() {
    return async (req: Request, res: Response) => {
      const userId = req.params[userIdParam]

      const resp = DefaultResponse
      resp.data = userId

      res.status(200).json(resp)
    }
  }

  create() {
    return async (_: Request, res: Response) => {
      const resp = DefaultResponse

      res.status(200).json(resp)
    }
  }
}

export default ArticlesController
