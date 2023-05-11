import express from 'express'
import { addCart, deleteCart, getCart } from '../controllers/cartController.js'
import { signIn } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post("/add-cart",signIn ,addCart)
router.get("/carts",signIn,getCart)
router.delete('/cart-delete/:cid',signIn, deleteCart)

export default router