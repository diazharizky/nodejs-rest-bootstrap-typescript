import express from 'express'
import repos from '../../../repositories'
import { Response } from '../../../models'

export default (_: express.Request, res: express.Response) => {
  try {
    const users = repos.user.list()

    const resp: Response = {
      ok: true,
      data: users,
    }

    res.status(200).json(resp)
  } catch (err) {
    throw err
  }
}
