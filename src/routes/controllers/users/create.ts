import { Request, Response } from 'express'
import { User } from '../../../models'
import repos from '../../../repositories'

export default (req: Request, res: Response) => {
  try {
    const newUser: User = req.body

    repos.user.create(newUser)

    res.status(200).json(newUser)
  } catch (err) {
    throw err
  }
}
