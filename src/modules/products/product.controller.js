import { Router } from "express";

export const productRouter = Router();
const router = Router();

productRouter.use('/products', router);

router.get('/', (req, res) => {
    res.send('Página de produtos')
})