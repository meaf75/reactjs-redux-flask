import { IUser } from "../../interfaces/IUser";
import { AddElementActionType } from "../StoreTypes";

export interface AppState {    
    user?: IUser;
    user_auth_token?: string;
}

export const SET_USER = 'SET_USER';
export const SET_USER_AUTH_TOKEN = 'SET_USER_AUTH_TOKEN';

export type AppActionTypes =
    AddElementActionType<typeof SET_USER, IUser | undefined> |
    AddElementActionType<typeof SET_USER_AUTH_TOKEN, string | undefined>