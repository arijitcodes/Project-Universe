import React from "react";

import Cards from "../layouts/Cards";
import Datetime from "../Datetime";

const Home = () => {
  return (
    <div className="mb-3">
      <div className="my-3" align="center">
        <h1 className="text-light ">Hello Aliens!</h1>
        {/* <span className="float-right text-white">
          Today : <Datetime />
        </span> */}
      </div>
      <Cards />
    </div>
  );
};

export default Home;
