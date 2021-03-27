import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center text-white">
            <p>
              Created with <FontAwesomeIcon icon={faHeart} style={{ color: "tomato" }} /> By Եվɑցɑժҽѵ <br />
              @2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
