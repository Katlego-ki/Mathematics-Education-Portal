import React  from "react";
import { Outlet, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';


const Layout = () => {
  return (
    <>
      <div id="org-logo"></div>
      <div>
        <nav id="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
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
