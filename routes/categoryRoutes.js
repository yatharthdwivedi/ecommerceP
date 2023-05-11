import express, { Router } from 'express'
import { categoryController, deleteCategory, getAllCategory, getCategory, updateCategoryController } from '../controllers/categoryControllers.js'
import { isAdmin, signIn } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.post('/create-category', signIn, isAdmin, categoryController )

router.put('/update-category/:id', signIn, isAdmin, updateCategoryController)

router.get('/categories',getAllCategory )

router.get('/single-category/:slug', getCategory)

router.delete('/delete-category/:id', signIn, isAdmin, deleteCategory)

export default router