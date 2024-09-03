import { Router } from "express";
import { userRouter } from './modules/user/user.controller';
import { productRouter } from './modules/products/product.controller';
import authRouter from "@modules/auth/auth.controller";

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/auth', authRouter)

export default router;