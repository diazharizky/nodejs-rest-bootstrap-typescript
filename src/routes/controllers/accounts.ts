import { Request, Response, NextFunction, Router } from 'express'
import { Account } from '../../models'
import { DefaultResponse } from '../responses'
import { repositories } from '../../interfaces'

export class AccountsController {
  private accountRepository: repositories.Account

  constructor(accountRepository: repositories.Account) {
    this.accountRepository = accountRepository
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
      const resp = DefaultResponse

      res.status(200).json(resp)
    }
  }

  get() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const accountId = +req.params['id']
        const account = await this.accountRepository.get(accountId)

        const resp = DefaultResponse
        resp.data = account

        res.status(200).json(resp)
      } catch (err) {
        next(err)
      }
    }
  }

  create(): (req: Request, res: Response, next: NextFunction) => void {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const newAccount: Account = req.body
        await this.accountRepository.create(newAccount)

        const resp = DefaultResponse
        resp.data = newAccount

        res.status(200).json(newAccount)
      } catch (err) {
        next(err)
      }
    }
  }
}
