import express from 'express'
import middlewares from './middlewares'

import usersController from './controllers/users'
import articlesController from './controllers/articles'

const router = express()

router.use(express.json())

router.use('/users', usersController)
router.use('/users/:user_id/articles', articlesController)

router.use(middlewares.routeNotFound) // Not found route will be redirected here
router.use(middlewares.error)

export default () => {
  router.listen(3000, () => {
    console.log('Server is listening on :3000!')
  })
}
