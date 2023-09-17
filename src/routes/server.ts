import config from 'config'
import express from 'express'

import middlewares from './middlewares'
import { AccountRepository } from '../repositories'

import {
  AccountsController,
  ArticlesController,
  accountIdParam,
} from './controllers'

const app = express()

app.use(express.json())

const accountRepository = new AccountRepository()

const accountsPath = '/accounts'
app.use(accountsPath, new AccountsController(accountRepository).router())

const articlesPath = accountsPath + `/:${accountIdParam}/articles`
app.use(articlesPath, new ArticlesController().router())

app.use(middlewares.routeNotFound) // Not found routes will be redirected here
app.use(middlewares.error)

export const serve = () => {
  const host: string = config.get('app.host')
  const port: number = config.get('app.port')

  app.listen(port, host, () => {
    console.log('App is listening on :3000!')
  })
}
