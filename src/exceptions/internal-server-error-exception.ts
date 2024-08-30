import { AppException } from "./app-exception";

export class InternalServerError extends AppException {
    constructor() {
        super('Internal server error', 500);
    }
}