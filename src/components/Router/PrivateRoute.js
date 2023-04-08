import React, {useLayoutEffect} from 'react';

import { isUserAuthenticated } from "../../features/auth/reducers/authSlice";

import { useDispatch, useSelector } from "react-redux";
import { login as loginLink } from "../../configs/routerLinks";
import {  Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const isLoading = useSelector((state) => state.auth.isLoading);

    useLayoutEffect(() => {
        dispatch(isUserAuthenticated())
    })
    
    console.log(isAuth)

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return isAuth ? children : <Navigate to={loginLink} />;
    }
    
}

export default PrivateRoute;