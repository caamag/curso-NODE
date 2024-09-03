import { Router } from "express";
import { validateAuth } from "./auth.service";
import { ReturnError } from "@exceptions/dtos/return-error.dtos";

const authRouter = Router()

authRouter.post('/', async (req, res): Promise<void> => {
    const user = await validateAuth(req.body).catch(error => {
        new ReturnError(res, error)
    })

    res.send(user)
})

export default authRouter;