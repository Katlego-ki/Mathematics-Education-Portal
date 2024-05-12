import Button from "@mui/material/Button";
import React  from "react";
import Box from "@mui/material/Box";

const button_style = {
    width:"30%",
    margin: "20px auto"
}

const Login = () => {
    return (
        <>
        <Box id = "form-container">
            <form id = "login-form">
                <label for="email">Email:</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Enter your email..."/>
                

                <label for="password">Password:</label> 
                    <input 
                        id="password"
                        type="password" 
                        placeholder="Enter password..."/>
                  
                <Button type="submit" variant="contained" style={button_style}>Submit</Button>
            </form>
        </Box>
        
        </>
    )
}

export default Login;