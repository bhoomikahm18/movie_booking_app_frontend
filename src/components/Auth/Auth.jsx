import React from 'react'
import AuthForm from './AuthForm';
import { sendUserAuthRequest } from '../../api_helpers/api_helpers.jsx';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/index.js';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onResReceived(data) {
        console.log(data);
        dispatch(userActions.login())
        localStorage.setItem("userID", data.id);
        navigate("/");

    }

    function getData(data) {
        console.log("Auth", data);
        sendUserAuthRequest(data.inputs, data.signup)
            .then(onResReceived)
            .catch((err) => console.log(err));
    }

    return (
        <AuthForm onSubmit={getData} isAdmin={false} />

    )
}

export default Auth;