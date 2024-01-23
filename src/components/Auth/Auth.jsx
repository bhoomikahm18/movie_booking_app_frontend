import React from 'react'
import AuthForm from './AuthForm';
import { sendUserAuthRequest } from '../../api_helpers/api_helpers.jsx';

function Auth() {

    function getData(data) {
        console.log("Auth", data);
        sendUserAuthRequest(data.inputs, data.signup)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <AuthForm onSubmit={getData} isAdmin={false} />

    )
}

export default Auth;