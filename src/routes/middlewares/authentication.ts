import { Request, Response, NextFunction } from 'express'

export default (err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err != null) {
    return res.status(500).send('Something went wrong!')
  }

  next()
}
