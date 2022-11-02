import React from "react"; 
import { NavLink} from "react-router-dom"; 

import "./Footer.css";
function Footer() {
  return (
    <div
      className=" mt-6 container-fluid  color-text "
      style={{ minHeight: "12rem" }}
    >
      <div className="row pt-4 text-center">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h5>Quick links</h5>
          <div className="d-flex flex-column">  
          <NavLink className="color-text p-1 navbar-brand" to="/home">
          Home
          </NavLink>
          <NavLink className="color-text p-1 navbar-brand" to="/about">
          About us
          </NavLink> 
            

          <NavLink className="color-text p-1 navbar-brand" to="/contact">
          Contact us
          </NavLink>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h5>Newsletter</h5>
          <div
            style={{ minHeight: "8rem" }}
            className="d-flex flex-column justify-content-around"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Subscribe to the newsletter"
            />
            <button className="btn btn-light">Subscribe</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h5>Contact Adress</h5>
          <div className="d-flex flex-column"></div>
          <p>X Street</p>
          <p>Random City</p>
          <p>
             Random State -2222
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
