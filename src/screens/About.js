import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase text-style pt-4">About us</h3>
      <div className="text-muted shadow-sm rounded p-3 lh-2 style-body ">
        <p>
          We are passionate about them and take each one personally. Our passion
          and dedication, combined with the experience of our in-house event
          specialists enables us to exceed client expectations.
        </p>
        <p>
          We make it our priority to understand our client’s objectives, working
          alongside clients from concept to completion to create a unique and
          memorable event. We rarely see a client just once. Most of our clients
          come to us again and again, enabling us to develop a solid
          understanding of their business objectives. Virtually all new
          customers arrive by personal recommendation. 
          
        </p>
      </div>
    </div>
  );
}

export default About;
