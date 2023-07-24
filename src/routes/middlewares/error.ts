import { Request, Response, NextFunction } from 'express'
import { FatalResponse } from '../responses'

export default (err: Error, _: Request, res: Response, next: NextFunction) => {
  const resp = FatalResponse(err)
  res.status(500).send(resp)
}
