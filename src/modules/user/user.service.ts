import { PrismaClient } from "@prisma/client";
import { UserModel } from "./user.model";
import { UserInsertDTO } from "./dtos/user-insert.dto";
import { NotFoundException } from "@exceptions/not-found-exception";
import { BadRequestException } from "@exceptions/badd-request-exception";
import { createPasswordHashed } from "src/utils/password";

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModel[]> => {
    const users = await prisma.user.findMany()

    if (users?.length === 0) {
        throw new NotFoundException('User')
    }

    return users;
}

export const getUserByEmail = async (email: string): Promise<UserModel | null> => {
    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    });

    if (!user) {
        throw new NotFoundException('User')
    }

    return user;
}

export const getUserByCpf = async (cpf: string): Promise<UserModel | null> => {
    const user = await prisma.user.findFirst({
        where: {
            cpf,
        }
    })

    if (!user) {
        throw new NotFoundException('User')
    }

    return user
}

export const createUser = async (body: UserInsertDTO): Promise<UserModel> => {
    const userEmail = await getUserByEmail(body.email)
        .catch(() => undefined)

    const userCpf = await getUserByCpf(body.cpf)
        .catch(() => undefined)

    const errorMessage = userEmail
        ? 'Email already exists'
        : userCpf
            ? 'Cpf already exists'
            : '';

    if (userEmail || userCpf) {
        throw new BadRequestException(errorMessage)
    }

    const user: UserInsertDTO = {
        ...body,
        password: await createPasswordHashed(body.password)
    }

    return prisma.user.create({
        data: user,
    })
}