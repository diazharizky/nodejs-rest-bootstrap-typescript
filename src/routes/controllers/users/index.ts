import express from 'express'
import list from './list'
import get from './get'
import create from './create'

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', create)

export default router
