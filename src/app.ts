import express from 'express';
import { userRouter } from './modules/user/user.controller';
import { productRouter } from './modules/products/product.controller';

const PORT = 3000
const app = express()

//using routes
app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.listen(PORT, () => {
    console.log('App rodando na porta 3000');
})