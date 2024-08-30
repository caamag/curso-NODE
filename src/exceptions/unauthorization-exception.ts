
import { AppException } from "./app-exception";

export class Unauthorization extends AppException {
    constructor() {
        super(`User without permission`, 401)
    }
}