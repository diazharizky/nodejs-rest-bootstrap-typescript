import express from 'express'
import usersController from './controllers/users'
import articlesController from './controllers/articles'
import middlewares from './middlewares'

const router = express()

router.use(express.json())
router.use('/users', usersController)
router.use('/articles', articlesController)
router.use(middlewares.error)

const listen = () => {
  router.listen(3000, () => {
    console.log('Server is listening on :3000!')
  })
}

export default listen
