import React from "react";

const ApodComp = (apodData) => {
  return (
    <div
      className="row mt-3 justify-content-center"
      style={{ display: "flex" }}
    >
      <div className="col-lg-6 col-sm-12">
        <img
          src={apodData.hdurl}
          alt={apodData.title}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
      <div className="col-lg-6 col-sm-12 table-responsive">
        <table className="table table-dark">
          <tbody>
            <tr>
              <td>Title:</td>
              <td>{apodData.title}</td>
            </tr>
            <tr>
              <td>Copyright:</td>
              <td>{apodData.copyright}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>{apodData.date}</td>
            </tr>
            <tr>
              <td>Explanation:</td>
              <td>{apodData.explanation}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApodComp;
