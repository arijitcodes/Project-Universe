import React from "react";

import Icon from "./icon.png";

const About = () => {
  return (
    <div className="my-3 py-2" style={{ backgroundColor: "rgb(0,0,0,0.7)" }}>
      <h1 align="center" className="text-light">
        PROJECT UNIVERSE
      </h1>
      <div align="center" className="my-4">
        <img src={Icon} alt="Icon" height="150px" width="150px" />
      </div>

      {/* ABOUT PROJECT UNIVERSE */}
      <div className="card-group mt-4">
        <div className="row justify-content-center text-light">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div
              className="card border-0"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                height: "100%",
                width: "100%",
              }}
            >
              <table className="table table-responsive-md text-white m-0 px-3">
                <tbody>
                  <tr>
                    <td align="right">Project:</td>
                    <td className="align-middle">Project Universe</td>
                  </tr>
                  <tr>
                    <td align="right">Developer:</td>
                    <td>Arijit Banerjee</td>
                  </tr>
                  <tr>
                    <td align="right">Technology:</td>
                    <td>ReactJS, NodeJS</td>
                  </tr>
                  <tr>
                    <td align="right" className="align-middle">
                      Other Technologies:
                    </td>
                    <td className="align-middle">
                      Axios, React Hooks, JSX, JS, ES6, Bootstrap etc.
                    </td>
                  </tr>
                  <tr>
                    <td align="right" className="align-middle">
                      Details:
                    </td>
                    <td className="align-middle">
                      This is a fun project I made for my fellow Space
                      Enthusiasts. The Data used in different features of this
                      app, directly comes from NASA's servers. Every day the
                      data changes automatically.
                      <p className="m-0 p-0">
                        This App is Still Under Development and more features
                        will come soon!
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 d-none">
            <div
              className="card border-0 mx-auto"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <div className="card-body m-0">
                <p className="card-text">
                  <img
                    src={Icon}
                    className=""
                    alt="Icon"
                    height="150px"
                    width="150px"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT THE DEVELOPER */}
      <div id="aboutTheDeveloper">
        <div className="row justify-content-center text-light">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div
              className="card border-0 mx-auto"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="card-body m-0">
                <h5 className="card-title">About the Developer</h5>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 border border-white p-0 m-0 d-flex justify-content-center align-items-center">
                    <div id="DPandSocials">
                      <div>
                        <p className="card-text text-center">
                          <img
                            src="https://avatars.githubusercontent.com/u/72866688?v=4"
                            className="rounded-circle m-3"
                            alt="Icon"
                            height="150px"
                            width="150px"
                          />
                        </p>
                      </div>
                      <div className="d-flex justify-content-center">
                        <a
                          href="https://instagram.com/arijit.codes"
                          className="fab fa-instagram custom-social mx-3 mb-2"
                          title="Instagram"
                          target="_blank"
                          rel="noreferrer"
                          // style={{
                          //   textDecoration: "none",
                          //   fontSize: "25px",
                          //   color: "white",
                          // }}
                        >
                          {" "}
                        </a>
                        <a
                          href="https://linkedin.com/in/arijitban"
                          className="fab fa-linkedin custom-social mx-3 mb-2"
                          title="LinkedIn"
                          target="_blank"
                          rel="noreferrer"
                          // style={{
                          //   textDecoration: "none",
                          //   fontSize: "25px",
                          //   color: "white",
                          // }}
                        >
                          {" "}
                        </a>
                        <a
                          href="https://github.com/ArijitCodes"
                          className="fab fa-github custom-social mx-3 mb-2"
                          title="GitHub"
                          target="_blank"
                          rel="noreferrer"
                          // style={{
                          //   textDecoration: "none",
                          //   fontSize: "25px",
                          //   color: "white",
                          // }}
                        >
                          {" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12 border border-white">
                    <table className="table table-responsive-md table-borderless table-sm text-white m-0 px-3">
                      <tbody>
                        <tr>
                          <td align="right">Name:</td>
                          <td>Arijit Banerjee</td>
                        </tr>
                        <tr>
                          <td align="right" className="align-middle">
                            Education:
                          </td>
                          <td>B.Sc. with Honours in Computer Science</td>
                        </tr>
                        <tr>
                          <td align="right" className="align-middle">
                            About Me:
                          </td>
                          <td>Freelance Developer | Full Stack | Actor</td>
                        </tr>
                        <tr>
                          <td align="right" className="align-middle">
                            Technologies:
                          </td>
                          <td style={{ fontSize: "14px" }}>
                            MERN Stack [MongoDB, ExpressJS, ReactJS, NodeJS],
                            JavaScript ES6, HTML, Bootstrap, PHP, MySQL, Git,
                            GitHub, Heroku, REST Api etc.
                          </td>
                        </tr>
                        <tr>
                          <td align="right" className="align-middle">
                            Contact:
                          </td>
                          <td className="align-middle">
                            <a
                              href="mailto:arijit.codes@gmail.com"
                              className="custom-link"
                              title="Contact Me!"
                              target="_blank"
                              rel="noreferrer"
                            >
                              arijit.codes@gmail.com
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="right" className="align-middle">
                            Resume:
                          </td>
                          <td className="align-middle">
                            <a
                              href="https://drive.google.com/drive/folders/1imfxd-ZGMxfpvmSc0ubqWolq62YhA-lv?usp=sharing"
                              className="custom-link"
                              title="Have a look at my Resume"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <u>Click Here to check my Resume</u>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
