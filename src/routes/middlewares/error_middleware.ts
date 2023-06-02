import { Request, Response } from 'express'

export default (err: Error, _: Request, res: Response) => {
  return res.status(500).send('Something went wrong!')
}
