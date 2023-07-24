import { Request, Response } from 'express'
import repos from '../../../repositories'
import { DefaultResponse } from '../../responses'

export default async (req: Request, res: Response) => {
  try {
    const userId = +req.params['id']
    const user = await repos.user.get(userId)

    const resp = DefaultResponse
    resp.data = user

    res.status(200).json(resp)
  } catch (err) {
    throw err
  }
}
