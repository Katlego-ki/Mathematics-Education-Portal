import { Outlet, Link } from "react-router-dom";
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
            <li>
            <form>
            <input type="text" placeholder="Search.." name = "search"/>
            <button type="submit" id="search-button"><i>Go</i></button>
          </form>
            </li>
          </ul>
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
