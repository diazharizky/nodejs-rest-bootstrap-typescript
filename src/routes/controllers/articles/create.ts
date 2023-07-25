import { Request, Response } from 'express'
import Core from '../../../core'
import { DefaultResponse } from '../../responses'

class CreateArticleController {
  private core: Core

  constructor(core: Core) {
    this.core = core
  }

  async route(_: Request, res: Response) {
    const resp = DefaultResponse

    res.status(200).json(resp)
  }
}

export default CreateArticleController
