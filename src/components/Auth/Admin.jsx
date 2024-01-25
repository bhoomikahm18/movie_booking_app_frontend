import React from 'react'
import AuthForm from './AuthForm.jsx'
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store/index.js';
import { sendAdminAuthRequest } from '../../api_helpers/api_helpers.jsx';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onResReceived(data) {
        console.log(data);
        dispatch(adminActions.login())
        localStorage.setItem("AdminID", data.id);
        localStorage.setItem("Token", data.token);
        navigate("/")
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