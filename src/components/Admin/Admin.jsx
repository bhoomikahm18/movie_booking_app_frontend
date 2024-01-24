import React from 'react'
import AuthForm from '../Auth/AuthForm.jsx'
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store/index.js';
import { sendAdminAuthRequest } from '../../api_helpers/api_helpers.jsx';

function Admin() {
    const dispatch = useDispatch();

    function onResReceived(data) {
        console.log(data);
        dispatch(adminActions.login())
        localStorage.setItem("AdminID", data.id);
        localStorage.setItem("Token", data.token);
    }

    function getData(data) {
        console.log("Admin", data);
        sendAdminAuthRequest(data.inputs, data.signup)
            .then(onResReceived)
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <AuthForm onSubmit={getData} isAdmin={true} />
        </div>
    )
}

export default Admin;