//criar container:
//docker run --name new-postgres -e POSTGRES_PASSWORD=familia007 -p 5432:5432 -d postgres
//prisma:
//npx prisma generate --schema schema/schema.prisma 

import express from 'express';
import { userRouter } from './modules/user/user.controller.js';
import { productRouter } from './modules/products/product.controller.js';

const PORT = 3000
const app = express()

//using routes
app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.listen(PORT, () => {
    console.log('App rodando na porta 3000');
})