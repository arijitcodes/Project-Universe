import React from "react";
import spinner from "./SpinnerColored.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        style={{
          width: "100px",
          margin: "auto",
          marginTop: "50px",
          display: "block",
        }}
        alt="Loading..."
      />
    </>
  );
};

export default Spinner;
