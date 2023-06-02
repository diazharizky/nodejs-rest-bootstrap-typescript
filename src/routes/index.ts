import express from 'express'
import usersController from './controllers/users'

const router = express()

router.use(express.json())
router.use('/users', usersController)

const listen = () => {
  router.listen(3000, () => {})
}

export default listen
