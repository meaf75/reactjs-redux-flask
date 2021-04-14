import { combineReducers, Store, createStore, applyMiddleware, compose } from "redux";
import { appReducer } from "./app/AppReducer";

export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
    app: appReducer,
});

export const store = createStore(
    rootReducer,
)
