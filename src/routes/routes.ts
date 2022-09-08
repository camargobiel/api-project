import express from 'express'
import controller from '../controllers/posts'

const router = express.Router()

router.get('/posts', controller.getAll)
router.get('/posts/:id', controller.getOne)
router.put('/posts/:id', controller.updateOne)
router.delete('/posts/:id', controller.deleteOne)
router.post('/posts/:id', controller.addOne)

export = router
