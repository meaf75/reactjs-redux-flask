import { AddElementActionType } from "../StoreTypes";

export interface AppState {    
    users: any[];
    userToEdit: any | null;
}

export const SET_USERS = 'SET_USERS';
export const SET_USER_TO_EDIT = 'SET_USER_TO_EDIT';

export type AppActionTypes =
    AddElementActionType<typeof SET_USERS, any[]> |
    AddElementActionType<typeof SET_USER_TO_EDIT, any | null> 