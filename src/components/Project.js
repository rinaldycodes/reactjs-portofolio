import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import "./Project.css";

const options = {
  buttons: {
    backgroundColor: "rgba(140, 94, 88, 0.8)",
    iconColor: "rgba(241, 191, 152, 0.7)",
  },
  settings: {
    overlayColor: "rgba(255, 237, 225, 1)",
    transitionSpeed: 1000,
    transitionTimingFunction: "linear",
  },
  thumbnails: {
    thumbnailsSize: ["120px", "100px"],
    thumbnailsOpacity: 0.4,
  },
  caption: {
    captionColor: "rgba(241, 191, 152, 1)",
  },
  progressBar: {
    size: "4px",
    backgroundColor: "rgba(255, 237, 225, 1)",
    fillColor: "#AF9AB2",
  },
};

const Project = () => {
  return (
    <section id="projects" className="py-5 bg-secondary">
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <div className="container">
            <div className="row mb-5 ">
              <div className="col">
                <h2 className="text-white">My Projects</h2>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-3 col-6 my-3">
                <a href="https://rinaldycodes.github.io/my-portofolio/images/jobboard.jpg">
                  <img className="img-fluid" src="https://rinaldycodes.github.io/my-portofolio/images/jobboard.jpg" alt="Job Board" />
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://rinaldycodes.github.io/my-portofolio/images/smpn4.jpg">
                  <img className="img-fluid" src="https://rinaldycodes.github.io/my-portofolio/images/smpn4.jpg" alt="Web Sekolah" />
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://rinaldycodes.github.io/my-portofolio/images/portofolio.jpg">
                  <img className="img-fluid" src="https://rinaldycodes.github.io/my-portofolio/images/portofolio.jpg" alt="Portofolio using bootstrap 5" />
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://rinaldycodes.github.io/my-portofolio/images/tambunhost.jpg">
                  <img className="img-fluid" src="https://rinaldycodes.github.io/my-portofolio/images/tambunhost.jpg" alt="Tambun Hosting" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <a href="https://api.whatsapp.com/send/?phone=6288299862278" className="btn btn-primary btn-hire text-white ">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </section>
  );
};

export default Project;
