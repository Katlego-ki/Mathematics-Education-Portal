import React  from "react";
import { Outlet, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import ArticleIcon from '@mui/icons-material/Article';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";

const styles = {style1:{fontWeight:"600", paddingLeft:"10px"}};

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

            <Link to="/about">
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
      
      <footer>

        <section id="sectionA">
          <h3>Quick links</h3>
          <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </section>

        <section id="sectionB">
          <h3>For Learners</h3>
          <ul>
            <li>login</li>
            <li>Enroll</li>
            <li>FAQ's</li>
          </ul>
        </section>
        
      </footer>
    </>
  )
};

export default Layout;
