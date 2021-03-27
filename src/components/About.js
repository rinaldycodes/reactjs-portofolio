import React from "react";
import Typed from "react-typed";
import "./About.css";
import cv from "../assets/CV.pdf";

const About = () => {
  return (
    <section id="about" className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="https://rinaldycodes.github.io/my-portofolio/FOTO.jpg" className=" photo" />
            <h2 className="my-3">Rinaldy Ramadhan</h2>
            <h3 className="my-3">Web Developer</h3>
          </div>
          <div className="col-md-6 text-left">
            <h4>About Me</h4>
            <p>
              I started make some web app when i was in university, and I am a self-taught developer. <br /> I love what I am doing, and I am highly motivated to collaborate with someone. <br /> If you are up into some projects, just let me
              know!
            </p>
            <h4>Technologies that I use:</h4>
            <Typed className="typed-text-about" strings={["HTML, CSS, Javascript.", "Laravel, Codeigniter, React.js, Flutter."]} typeSpeed={40} backSpeed={60} loop /> <br />
            <a href={cv} className="btn btn-primary px-5 mt-5 btn-hero">
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
