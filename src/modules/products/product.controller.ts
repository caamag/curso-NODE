import { Router } from "express";

export const productRouter = Router();

productRouter.get('/', (req, res): void => {
    res.send('Página de produtos')
})