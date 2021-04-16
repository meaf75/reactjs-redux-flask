import { IUser } from "./IUser";

export interface AuthLoginResponse {
    user: IUser;
    auth_token: string;
}

export interface RegisterResponse {
    status: number,
    message: string,
    error_message: string,
    data: {
        user: IUser,
        token: string,
    }
}