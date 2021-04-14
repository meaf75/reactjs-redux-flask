import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { RegisterScreen } from "./auth/RegisterScreen";
import { ApexContainer } from "../components/atoms/ApexContainer";
import { LoginScreen } from "./auth/LoginScreen";

const newHistory = createBrowserHistory();

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('auth_token')

        // if(token){
        //   dispatch({
        //     type: authConstants.AUTHENTICATION_SUCCESS,
        //     payload: {
        //       token
        //     }
        //   },[])
        // }
    }, [])

    return (
        <ApexContainer>
            <Router history={newHistory}>
                <Link to="/"></Link>
                <Route path="/" exact component={LoginScreen} />
                <Route path="/login" exact component={LoginScreen} />
                <Route path="/register" exact component={RegisterScreen} />
            </Router>
        </ApexContainer>
    );
}
