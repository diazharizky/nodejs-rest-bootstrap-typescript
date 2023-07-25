import express from 'express'
import middlewares from './middlewares'
import Core from '../core'
import UsersController from './controllers/users'
import ArticlesController from './controllers/articles'

const core = new Core()

const router = express()

router.use(express.json())

const usersPath = '/users'
router.use(usersPath, new UsersController(core).router())

const articlesPath = usersPath + '/:user_id/articles'
router.use(articlesPath, new ArticlesController(core).router())

router.use(middlewares.routeNotFound) // Not found route will be redirected here
router.use(middlewares.error)

export default () => {
  router.listen(3000, () => {
    console.log('Server is listening on :3000!')
  })
}
