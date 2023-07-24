import { Request, Response, NextFunction } from 'express'
import { User } from '../../../models'
import repos from '../../../repositories'
import { DefaultResponse } from '../../responses'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser: User = req.body
    await repos.user.create(newUser)

    const resp = DefaultResponse
    resp.data = newUser

    res.status(200).json(newUser)
  } catch (err) {
    next(err)
  }
}
