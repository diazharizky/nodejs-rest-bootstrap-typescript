import express from 'express'
import repos from '../../../repositories'
import { DefaultResponse } from '../../responses'

export default async (_: express.Request, res: express.Response) => {
  const users = await repos.user.list()

  const resp = DefaultResponse
  resp.data = users

  res.status(200).json(resp)
}
