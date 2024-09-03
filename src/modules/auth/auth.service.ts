import { UserModel } from "@modules/user/user.model";
import { AuthDTO } from "./dtos/auth.dtos";
import { getUserByEmail } from "@modules/user/user.service";

export const validateAuth = async (authDTO: AuthDTO): Promise<UserModel | null> => {
    const user = await getUserByEmail(authDTO.email);
    return user;
}