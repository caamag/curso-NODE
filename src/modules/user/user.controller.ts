import { Router } from "express";
import { getUsers, createUser } from "./user.service";
import { NotFoundException } from "@exceptions/not-found-exception";
import { ReturnError } from "@exceptions/dtos/return-error.dtos";

export const userRouter = Router()

userRouter.get('/', async (_, res): Promise<void> => {
    const users = await getUsers().catch(error => {
        if (error instanceof NotFoundException) {
            res.status(204).send([])
        } else {
            new ReturnError(res, error)
        }
    })
    res.send(users)
})

userRouter.post('/', async (req, res): Promise<void> => {
    const userCreated = await createUser(req.body).catch(error => {
        new ReturnError(res, error)
    })
    res.send(userCreated)
})