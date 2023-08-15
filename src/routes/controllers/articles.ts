import { Router, Request, Response } from 'express'
import { Tracer, trace } from '@opentelemetry/api'
import { DefaultResponse } from '../responses'
import jsonph from '../../apis/jsonplaceholder'

export const userIdParam = 'userId'

class ArticlesController {
  private trace: Tracer

  constructor() {
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

      const resp = DefaultResponse
      res.status(200).json(resp)

      span.end()
    }
  }
}

export default ArticlesController
