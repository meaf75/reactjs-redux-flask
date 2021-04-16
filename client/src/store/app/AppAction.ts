import { Dispatch } from "react";
import { IUser } from "../../interfaces/IUser";
import { AppActionTypes } from './AppTypes';

export const SetUser = (newUser: IUser | undefined) => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch({
        type: "SET_USER",
        payload: {
            data: newUser
        }
    });
}

export const SetUserAuthToken = (value?: string) => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch({
        type: "SET_USER_AUTH_TOKEN",
        payload: {
            data: value
        }
    });
}
