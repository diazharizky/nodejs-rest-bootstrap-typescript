import express from 'express'
import middlewares from './middlewares'
import Core from '../core'

import UsersController from './controllers/users'
import ArticlesController, { userIdParam } from './controllers/articles'

const core = new Core()
const router = express()

router.use(express.json())

setUpControllers()

router.use(middlewares.routeNotFound) // Not found routes will be redirected here
router.use(middlewares.error)

export default () => {
  router.listen(3000, () => {
    console.log('App is listening on :3000!')
  })
}

function setUpControllers() {
  const usersPath = '/users'
  router.use(usersPath, new UsersController(core).router())

  const articlesPath = usersPath + `/:${userIdParam}/articles`
  router.use(articlesPath, new ArticlesController(core).router())
}
