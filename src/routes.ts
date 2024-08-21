import { Router } from "express";
import { userRouter } from './modules/user/user.controller';
import { productRouter } from './modules/products/product.controller';

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)

export default router;