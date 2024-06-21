import React  from "react";
import { Outlet, Link} from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
//import { Icon } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import ArticleIcon from '@mui/icons-material/Article';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
//import { colors } from "@mui/material";
//import Box from "@mui/material/Box";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from "@mui/icons-material/LightMode";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Layout = () => {

  //nav themes
  const nav_themes = {
    darkMode:{backgroundColor: "green", color: "grey"},
    lightMode:{backgroundColor: "blue", color: "black"}
  }

  //mode-button themes
  const button_themes ={
    darkMode:{backgroundColor: "white"},
    lightMode:{backgroundColor: "black"}
  }

  //App body themes
  const body_themes = {
    darkMode:{backgroundColor: "#111", color: "grey"},
    lightMode:{backgroundColor: "white", color:"black"}
  }

  //footer themes
  const footer_themes = {
    darkMode:{color:"grey", paddingLeft:"10px"},
    lightMode:{color:"#111", paddingLeft:"10px"}
  }
  //useState hooks (change to "[nav_theme, setNavTheme] ?? to make it more descriptive")
  const [isdark, setTheme] = useState(false); // "gear!"
  const [mode,setMode] = useState(nav_themes.darkMode);
  const [body_theme, setBodyTheme] = useState(body_themes.darkMode);
  const [button_theme, setButtonTheme] = useState(button_themes.darkMode);
  const [footer_theme, setFooterTheme] = useState(footer_themes.darkMode);

  //nav and footer styles
  const styles = {
    nav_style:{fontWeight:"600", paddingLeft:"10px"},
  };
  
  //switching between dark and light mode
  const changeTheme = () => {
    setTheme(() => {
      return !isdark? true:false;}); 
    setMode(() => {
      return isdark? nav_themes.darkMode: nav_themes.lightMode;}) 
    setBodyTheme(() => {
      return isdark? body_themes.darkMode: body_themes.lightMode;})
    setButtonTheme(() => {
      return isdark? button_themes.darkMode: button_themes.lightMode;})
    setFooterTheme(() => {
      return isdark? footer_themes.darkMode: footer_themes.lightMode;})
  }

  return (
    <>
      <div id="org-logo"></div>
      <div>
        <nav id="nav-bar" style={mode}>
          <Stack id="module-links" alignment="center" direction="row">
            <Link to="/">
              <HomeIcon/>
              <Typography style={styles.nav_style}>Home</Typography>
            </Link>  

            <Link to="/blogs">
              <ArticleIcon/>
              <Typography style={styles.nav_style}>Blogs</Typography>
            </Link>  

            <Link to="/contact">
              <PhoneIcon/>
              <Typography style={styles.nav_style}>Contact_Us</Typography>
            </Link>

            <Link to="/about">
              <InfoIcon />
              <Typography style={styles.nav_style}>About</Typography>
            </Link>
            <Link to="login">
              <AccountCircleIcon/>
              <Typography style={styles.nav_style}>Register/Login</Typography>
            </Link>
          </Stack>

          <Stack id="Search-bar" alignment="center" direction="row">
            <TextField 
                      id="text-field"
                      variant="outlined"
                      placeholder="Search..."
                      size="small"
                      style={{color:"black"}}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment id="search-icon">
                            <IconButton>
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        )
                      }} 
                  />
            <Button 
              variant="contained" 
              style={button_theme} //////
              onClick={changeTheme}>  
                {isdark? 
                  <DarkModeIcon style={{fill:"white"}}/> :
                  <LightModeIcon style={{fill: "black"}} />
                }
            </Button>
            </Stack>
        </nav>
      </div>
      
      <div id="Outlet-div-wrapper" style={body_theme}>
        <div id="outlet-div" style={body_theme}>
          <Outlet />
        </div>
      </div>
      
      {/** style footer properly */}
      <footer style={body_theme}> {/*use <stack> to replace <footer> */}
        <Stack id="sectionA" direction="column"> 
          <Typography variant="h4" >Quick links</Typography>
          <Link to="/">
              <Typography className="Links" style={footer_theme}>Home</Typography>
            </Link>  

            <Link to="/blogs">      
              <Typography style={footer_theme}>Blogs</Typography>
            </Link>  

            <Link to="/contact">    
              <Typography style={footer_theme}>Contact_Us</Typography>
            </Link>

            <Link to="/about">
              <Typography style={footer_theme}>About</Typography>
            </Link>
        
        </Stack>
        <Divider orientation="vertical" flexItem/>
        <Stack id="sectionB" direction="column">
          <Typography variant="h4">For Learners</Typography>
          <Link to="/login">      
            <Typography style={footer_theme}>Login</Typography>
          </Link>  

          <Link to="/sign-in">    
            <Typography style={footer_theme}>Enroll/Register</Typography>
          </Link>

          <Link to="/queries">
            <Typography style={footer_theme}>FAQ's 'just example'</Typography>
          </Link>
        </Stack>   
      </footer>
    </>
  )
};

export default Layout;
