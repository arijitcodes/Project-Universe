import React, { useEffect, useState } from "react";
import axios from "axios";

import Datetime from "../Datetime";
import Neo from "./Neo";
import Spinner from "../layouts/Spinner";

const Neos = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api =
          process.env.REACT_APP_NEOS_API +
          "start_date=" +
          Datetime() +
          "&end_date=" +
          Datetime() +
          "&api_key=" +
          process.env.REACT_APP_API_KEY;

        setLoading(true);
        const tempData = await axios.get(api);
        setData(tempData.data);
        setLoading(false);
        // console.log("Data Fetched Successfully!");
        // console.log(data.near_earth_objects[Datetime()][0].id);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();

    return () => {
      setData(null);
    };
  }, []);

  return (
    <>
      {/* <div
        className="mx-auto my-auto text-light d-flex align-items-center justify-content-center"
        align="center"
        style={{ height: "90vh" }}
      >
        <div style={{ backgroundColor: "rgb(0,0,0,0.5)" }}>
          <p>
            <h1>Asteroids - NEOs (Near Earth Objects)</h1>
          </p>
          <p>
            <h4>This feature is still under Development.</h4>
          </p>
          <p>
            <h2>Coming Soon!</h2>
          </p>
        </div>
      </div> */}
      {loading === true ? (
        <Spinner />
      ) : (
        <div className="container-sm text-light">
          <h1 align="center" className="my-3">
            NEOs - Near Earth Objects
          </h1>
          <span align="center">
            <h5>Recorded on: {new Date(Datetime()).toDateString()}</h5>
            <h5>By: NASA</h5>
          </span>

          {/* FOR Medium / Large Screens ONLY */}
          <p align="right" className="d-none d-md-block">
            Total Number of Objects : {data && data.element_count}
          </p>
          {/* FOR Small Screens ONLY */}
          <p align="center" className="d-sm-block d-md-none">
            Total Number of Objects : {data && data.element_count}
          </p>

          <Neo stateData={data} date={Datetime()} />
        </div>
      )}
    </>
  );
};

export default Neos;
