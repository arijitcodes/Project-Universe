import React from "react";

import Icon from "./icon.png";

const About = () => {
  return (
    <div
      className="container my-3 py-2"
      style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
    >
      <h1 align="center" className="text-light">
        PROJECT UNIVERSE
      </h1>
      <div align="center" className="my-4">
        <img src={Icon} alt="Icon" height="150px" width="150px" />
      </div>
      <div
        className="card-group mt-4"
        style={{ backgroundColor: "rgb(0,0,0,0" }}
      >
        <div className="row justify-content-center text-light">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div
              className="card border-0"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                height: "100%",
                width: "100%",
              }}
            >
              {/* <div className="card-header border-0">
                <h5 className="card-title">About the Project</h5>
              </div> */}
              {/* <div className="card-body"> */}
              {/* <h5 className="card-title">Success card title</h5> */}
              {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              <table class="table table-responsive-md text-white m-0 px-3">
                {/* <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead> */}
                <tbody>
                  <tr>
                    <td align="right">Project:</td>
                    <td class="align-middle">Project Universe</td>
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
                    <td align="right" class="align-baseline">
                      Others:
                    </td>
                    <td>Axios, React Hooks, JSX, JS, ES6, Bootstrap etc.</td>
                  </tr>
                  <tr>
                    <td align="right" class="align-middle">
                      Details:
                    </td>
                    <td class="align-middle">
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
              {/* </div> */}
              {/* <div className="card-footer border-0">Footer</div> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 d-none">
            <div
              className="card border-0 mx-auto"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              {/* <div className="card-header border-warning"></div> */}
              <div className="card-body m-0">
                {/* <h5 className="card-title">Success card title</h5> */}
                <p className="card-text">
                  {/* Some quick example text to build on the card title and make up
                  the bulk of the card's content. */}
                  <img
                    src={Icon}
                    className=""
                    alt="Icon"
                    height="150px"
                    width="150px"
                  />
                </p>
              </div>
              {/* <div className="card-footer border-warning"></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="github-card"
        data-github="ArijitCodes"
        data-width="400"
        data-height="150"
        data-theme="default"
      ></div>
      <div
        className="github-card"
        data-github="ArijitCodes"
        data-width="400"
        data-height="317"
        data-theme="medium"
      ></div> */}
    </div>
  );
};

export default About;
