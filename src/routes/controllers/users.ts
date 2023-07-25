import { Request, Response, NextFunction, Router } from 'express'
import Core from '../../core'
import { User } from '../../models'
import { DefaultResponse } from '../responses'

class UsersController {
  private core: Core

  constructor(core: Core) {
    this.core = core
  }

  router(): Router {
    const r = Router()

    r.get('/', this.list())
    r.get('/:id', this.get())
    r.post('/', this.create())

    return r
  }

  list() {
    return async (_: Request, res: Response) => {
      const users = await this.core.userRepository.list()

      const resp = DefaultResponse
      resp.data = users

      res.status(200).json(resp)
    }
  }

  get() {
    return async (req: Request, res: Response) => {
      try {
        const userId = +req.params['id']
        const user = await this.core.userRepository.get(userId)

        const resp = DefaultResponse
        resp.data = user

        res.status(200).json(resp)
      } catch (err) {
        throw err
      }
    }
  }

  create(): (req: Request, res: Response, next: NextFunction) => void {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const newUser: User = req.body
        await this.core.userRepository.create(newUser)

        const resp = DefaultResponse
        resp.data = newUser

        res.status(200).json(newUser)
      } catch (err) {
        next(err)
      }
    }
  }
}

export default UsersController
