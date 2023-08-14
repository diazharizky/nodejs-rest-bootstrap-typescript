import { Router, Request, Response } from 'express'
import { Tracer, trace } from '@opentelemetry/api'
import Core from '../../core'
import { DefaultResponse } from '../responses'
import jsonph from '../../apis/jsonplaceholder'

export const userIdParam = 'userId'

class ArticlesController {
  private core: Core
  private trace: Tracer

  constructor(core: Core) {
    this.core = core
    this.trace = trace.getTracer('ArticlesController')
  }

  router(): Router {
    const r = Router({ mergeParams: true })

    r.get('/:id', this.get())
    r.post('/', this.create())

    return r
  }

  get() {
    return async (req: Request, res: Response) => {
      // const userId = req.params[userIdParam]

      const posts = await jsonph.getPosts()

      const resp = DefaultResponse
      resp.data = posts

      res.status(200).json(resp)
    }
  }

  create() {
    return async (_: Request, res: Response) => {
      const span = this.trace.startSpan('create')
      await this.core.createArticleModule.call(span)

      const resp = DefaultResponse

      res.status(200).json(resp)

      span.end()
    }
  }
}

export default ArticlesController
