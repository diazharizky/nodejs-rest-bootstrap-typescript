import express from 'express'
import list from './list'
import get from './get'

const router = express.Router()

router.get('/', list)
router.get('/:id', get)

export default router
