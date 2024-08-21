import { Router } from "express";
import { getUsers, createUser } from "./user.service";

export const userRouter = Router()

userRouter.get('/', async (req, res): Promise<void> => {
    const users = await getUsers()
    res.send(users)
})

userRouter.post('/', async (req, res): Promise<void> => {
    const userCreated = await createUser(req.body)
    res.send(userCreated)
})