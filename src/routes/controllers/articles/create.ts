import { Request, Response } from 'express'
import { Article } from '../../../models'
import modules from '../../../modules'
import { DefaultResponse } from '../../responses'

export default async (req: Request, res: Response) => {
  const newArticle: Article = req.body
  await modules.createArticle(newArticle)

  const resp = DefaultResponse
  resp.data = newArticle

  res.status(200).json(resp)
}
