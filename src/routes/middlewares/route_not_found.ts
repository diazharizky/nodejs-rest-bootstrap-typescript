import { Request, Response } from 'express'
import createError from 'http-errors'

export default (_: Request, res: Response, next: Function) => {
  next(createError(404))
}
