import errorMiddleware from './error_middleware'
import authenticationMiddleware from './authentication_middleware'

export default {
  error: errorMiddleware,
  authentication: authenticationMiddleware,
}
