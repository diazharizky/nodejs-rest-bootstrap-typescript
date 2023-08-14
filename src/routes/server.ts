import config from 'config'
import express from 'express'

import Core from '../core'
import middlewares from './middlewares'

import UsersController from './controllers/users'
import ArticlesController, { userIdParam } from './controllers/articles'

const core = new Core()
const app = express()

app.use(express.json())

setUpControllers()

app.use(middlewares.routeNotFound) // Not found routes will be redirected here
app.use(middlewares.error)

export const serve = () => {
  const host: string = config.get('app.host')
  const port: number = config.get('app.port')

  app.listen(port, host, () => {
    console.log('App is listening on :3000!')
  })
}

function setUpControllers() {
  const usersPath = '/users'
  app.use(usersPath, new UsersController(core).router())

  const articlesPath = usersPath + `/:${userIdParam}/articles`
  app.use(articlesPath, new ArticlesController(core).router())
}
