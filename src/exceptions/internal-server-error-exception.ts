import { AppException } from "./app-exception";

export class InternalServerError extends AppException {
    constructor(message: string) {
        super(message);
    }
}