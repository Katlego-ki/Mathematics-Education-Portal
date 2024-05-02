import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div></div>
      <nav id="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
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
