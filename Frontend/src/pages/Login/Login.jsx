import Button from "@mui/material/Button";
import React, { useState }  from "react";
import "./Login.css";

const button_style = {
    width:"30%",
    margin: "20px auto"
}

const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState(false);

    const validate = () => {
        
        if(!email){
            setErrors(true);
        }
        if(!password){
            setErrors(true);
        }
    }
      
        
    const handleSubmit = (e) => {
        e.preventDefault();//prevent refreshing page upon submit among other things.
        validate();
    }

    return (
        <div id = "form-container">
            <form 
                id = "login-form" 
                style={{backgroundColor: 'white'}}
                onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        value={email}
                        placeholder="Email or Username"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type="password"
                        value={password}
                        placeholder="Password"                     
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    {errors && <div>Please enter your username and password!</div>}
                  
                <Button 
                    type="submit" 
                    variant="contained" 
                    style={button_style}
                    disabled={!password || !email}
                    onSubmit={() => handleSubmit}
                    >Submit</Button>
            </form>
        </div>
    )
}

export default Login;