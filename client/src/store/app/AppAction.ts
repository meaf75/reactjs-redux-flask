import { Dispatch } from "react";
import { AppActionTypes, SET_USERS, SET_USER_TO_EDIT } from './AppTypes';

export const SetUsers = (newUsers: any[]) => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch({
        type: SET_USERS,
        payload: {
            data: newUsers
        }
    });
}

export const SetUserToEdit = (userToEdit: any | null) => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch({
        type: SET_USER_TO_EDIT,
        payload: {
            data: userToEdit
        }
    });
}
