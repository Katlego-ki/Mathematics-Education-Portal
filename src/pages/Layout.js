import React  from "react";
import { Outlet, Link } from "react-router-dom";
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

const styles = {
  style1:{fontWeight:"600", paddingLeft:"10px"},
  styles2:{color:"rgb(50,10,200)", paddingLeft:"10px", textDecoration:"none"}
};

const Layout = () => {
  return (
    <>
      <div id="org-logo"></div>
      <div>
        <nav id="nav-bar">
          <Stack alignment="center" direction="row">
            <Link to="/">
              <HomeIcon/>
              <Typography style={styles.style1}>Home</Typography>
            </Link>  

            <Link to="/blogs">
              <ArticleIcon/>
              <Typography style={styles.style1}>Blogs</Typography>
            </Link>  

            <Link to="/contact">
              <PhoneIcon/>
              <Typography style={styles.style1}>Contact_Us</Typography>
            </Link>

            <Link to="/about">
              <InfoIcon />
              <Typography style={styles.style1}>About</Typography>
            </Link>
          </Stack>
         
          <form  id ="search-bar">
                <TextField 
                    variant="outlined"
                    placeholder="Search..."
                    size="small" 
                    style={{backgroundColor: "rgb(150,150,150)"}}
                />
                    <IconButton type="submit" aria-label="search">
                      <SearchIcon style={{fill : "white"}} />
                    </IconButton>
                      
          </form> 
        </nav>
      </div>

      <div id="outlet-div">
        <Outlet />
      </div>
      
      <footer> {/*use <stack> to replace <Stack> */}
        <Stack id="sectionA" direction="column"> 
          <Typography variant="h4" >Quick links</Typography>
          <Link to="/">
              <Typography style={styles.styles2}>Home</Typography>
            </Link>  

            <Link to="/blogs">      
              <Typography style={styles.styles2}>Blogs</Typography>
            </Link>  

            <Link to="/contact">    
              <Typography style={styles.styles2}>Contact_Us</Typography>
            </Link>

            <Link to="/about">
              <Typography style={styles.styles2}>About</Typography>
            </Link>
        
        </Stack>

        <Stack id="sectionB" direction="column">
          <Typography variant="h4">For Learners</Typography>
          <Link to="/login">      
            <Typography style={styles.styles2}>Login</Typography>
          </Link>  

          <Link to="/sign-in">    
            <Typography style={styles.styles2}>Enroll/Register</Typography>
          </Link>

          <Link to="/queries">
            <Typography style={styles.styles2}>FAQ's 'just example'</Typography>
          </Link>
        </Stack>   
      </footer>
    </>
  )
};

export default Layout;
