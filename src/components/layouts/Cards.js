import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    // <div className="row justify-content-center">
    //   <div className="mt-2 mb-2 col-lg-4 col-md-6 col-sm-12">
    //     <Card />
    //   </div>
    //   <div className="mt-2 mb-2 col-lg-4 col-md-6 col-sm-12">
    //     <Card />
    //   </div>
    //   <div className="mt-2 mb-2 col-lg-4 col-md-6 col-sm-12">
    //     <Card />
    //   </div>
    //   <div className="mt-2 mb-2 col-lg-4 col-md-6 col-sm-12">
    //     <Card />
    //   </div>
    //   <div className="mt-2 mb-2 col-lg-4 col-md-6 col-sm-12">
    //     <Card />
    //   </div>
    //   <div className="mt-2 mb-2 col-lg-4 col-md-6 col-sm-12">
    //     <Card />
    //   </div>
    // </div>
    <>
      <div className="row justify-content-center">
        <div className="card-group ">
          <Card
            title="Astronomy Picture of the Day"
            body="Do you know, NASA has a very special service named 'Astronomy Picture of the Day' ? Each day they feature a different image or photograph of our beautiful universe, along with a brief explanation written by a professional astronomer."
            buttonText="Let's Check it Out"
            linkTo="apod"
          />
          <Card
            title="Near Earth Objects - Asteroids"
            body="Ever wondered what is just outside of our beloved planet ? What are the things that are passing by us ? Ever wanted to see an Asteroid passing by ? Or may be some 'Unknown Object in the Space ;) ?"
            buttonText="Let's Check it Out"
            linkTo="neos"
          />
          {/* <Card
            title="Near Earth Objects - Asteroids"
            body=" Ever wanted to see an Asteroid passing by ? Or may be some 'Unknown Object in the Space ;) ?"
            buttonText="Let's Check it Out"
            linkTo="neos"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Cards;
