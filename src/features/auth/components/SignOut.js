import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../reducers/authSlice';
import { useNavigate } from 'react-router';


const SignOut = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(logOut());
        navigate('/');
    })
};

export default SignOut;