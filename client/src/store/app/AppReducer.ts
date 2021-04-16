import { AppState, AppActionTypes } from './AppTypes';

export const appInitialState: AppState = {    
    user: undefined,
    user_auth_token: undefined
}

export const appReducer = (state: AppState = appInitialState, action: AppActionTypes): AppState => {
    const currentState = { ...state };
    
    switch (action.type) {
        case "SET_USER": {
            currentState.user = action.payload.data;
            break;
        }
        case "SET_USER_AUTH_TOKEN": {
            currentState.user_auth_token = action.payload.data;
            break;
        }
        default:
            return currentState;
    }
    return currentState;
}