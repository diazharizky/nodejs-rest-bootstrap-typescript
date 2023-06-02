import { Request, Response } from 'express'
import repos from '../../../repositories'

export default (req: Request, res: Response) => {
  try {
    const userId = +req.params['id']

    const article = repos.article.get(userId)

    res.status(200).json(article)
  } catch (err) {
    throw err
  }
}
