import { Router } from "express";
import { getUsers } from "./user.service";
import { createUser } from "./user.service";

export const userRouter = Router()
const router = Router()

userRouter.use('/users', router)

router.get('/', async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

router.post('/', async (req, res) => {
    const userCreated = await createUser(req.body)
    res.send(userCreated)
})