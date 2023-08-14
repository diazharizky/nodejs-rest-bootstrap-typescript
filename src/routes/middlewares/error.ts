import { Request, Response } from 'express'
import { FatalResponse } from '../responses'

export default (err: Error, _: Request, res: Response) => {
  const resp = FatalResponse(err)
  res.status(500).send(resp)
}
