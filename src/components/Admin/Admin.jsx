import React from 'react'
import AuthForm from '../Auth/AuthForm.jsx'

function Admin() {
    function getData(data) {
        console.log("Admin", data);
    };
    return (
        <div>
            <AuthForm onSubmit={getData} isAdmin={true} />
        </div>
    )
}

export default Admin;