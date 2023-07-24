import { FATAL_ERROR_MESSSAGE } from './messages'

export type Response = {
  ok: boolean
  data?: any
  error?: Error
}

export const DefaultResponse: Response = {
  ok: true,
}

export const FatalResponse = (err: Error): Response => {
  return {
    ok: false,
    data: FATAL_ERROR_MESSSAGE,
    error: err,
  }
}
