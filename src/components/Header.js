import React from "react";
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="main-info py-3">
          <h1>Web Development and SEO Optimize</h1>
          <Typed className="typed-text" strings={["Web Design", "Web Development", "SEO Optimize"]} typeSpeed={40} backSpeed={60} loop />
          <a href="#" className="btn btn-lg btn-outline-primary my-5 btn-hero">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
