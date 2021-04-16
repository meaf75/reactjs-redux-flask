import axios from 'axios'
import { Dispatch } from 'react';
import { API_ENDPOINT } from '../constants/ApiEndpoint'
import { AUTH_TOKEN_KEY } from '../constants/local_storage_keys';
import { IUser } from '../interfaces/IUser';
import { SetUser, SetUserAuthToken } from '../store/app/AppAction';

export const SendLoginRequest = (email: string, password: string) => {

    const body = {
        mail: email,
        password: password
    }

    return axios.post(`${API_ENDPOINT}/api/login`,body);
}

export const OnUserLogin = (dispatch: Dispatch<any>, auth_token: string) => {
    localStorage.setItem(AUTH_TOKEN_KEY,auth_token);
    dispatch(SetUserAuthToken(auth_token));
}

export const OnUserLogout = (dispatch: Dispatch<any>) => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    dispatch(SetUserAuthToken(undefined));
    dispatch(SetUser(undefined));
}