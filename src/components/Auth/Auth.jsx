import React from 'react'
import AuthForm from './AuthForm';

function Auth() {

    function getData(data) {
        console.log("Auth", data);
    }

    return (
        <AuthForm onSubmit={getData} isAdmin={false} />

    )
}

export default Auth;