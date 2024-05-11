import React  from "react";

const Login = () => {
    return (
        <>
        <div id = "form-container">
            <form id = "login-form">
                <input className="form-field" type="email"/>
                <input className="form-field" type="password"/>
            </form>
        </div>
        
        </>
    )
}

export default Login;