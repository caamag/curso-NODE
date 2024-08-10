import { Router } from "express";
import { PrismaClient } from "@prisma/client";

export const userRouter = Router()
const router = Router()

userRouter.use('/users', router)

router.get('/', async (req, res) => {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()

    res.send(users)
})

router.get('/:id', (req, res) => {
    res.send('Id do usuário - ' + req.params.id)
})