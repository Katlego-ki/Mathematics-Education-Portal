import Button from "@mui/material/Button";
import React  from "react";
import "./Login.css";

const button_style = {
    width:"30%",
    margin: "20px auto"
}

const Login = () => {

    return (
        <div id = "form-container">
            <form id = "login-form" style={{backgroundColor: 'white'}}>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email or Username"
                    />

                    <input 
                        id="password"
                        type="password" 
                        placeholder="Password"/>
                  
                <Button type="submit" variant="contained" style={button_style}>Submit</Button>
            </form>
        </div>
    )
}

export default Login;