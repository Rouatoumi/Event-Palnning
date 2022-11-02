import { NavLink } from "react-router-dom"; 
import "./Navbar.css";

function NavBar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg nav-style">
  <div className="container-fluid">
  <NavLink className="navbar-brand nav-text" to="/home">
            EventPLanning
          </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink className="navbar-brand nav-text" to="/home">
            Home
          </NavLink>        </li>
        <li className="nav-item">
        <NavLink className="navbar-brand nav-text" to="/about">
            About
          </NavLink>        </li>
        <li className="nav-item">
        <NavLink className="navbar-brand nav-text" to="/contact">
            Contact us
          </NavLink>        </li>
         
      </ul> 
      
    </div> 
    <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn " type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
  </div>
</nav>
    </div>
  );
}

export default NavBar;
