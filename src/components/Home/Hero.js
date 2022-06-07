import React from "react";
import "./home.css";

const Hero = () => {
  return (
    <div className="hero-container" >
      <div className="container hero-wrap p-4">
        <h3 style={{ fontWeight: "bolder" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
          laborum.
        </h3>
        <p style={{ fontWeight: "500" }} className="hero-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          pariatur nihil optio at. Perferendis est quam doloribus consequuntur
          iusto labore possimus porro totam?
        </p>
        <button className="button btn-small button-primary">Read More</button>
      </div>
    </div>
  );
};

export default Hero;
