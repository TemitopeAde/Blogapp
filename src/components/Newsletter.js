import React from "react";
import image from "./images/envelope.svg";

const Newsletter = () => {
  return (
    <div className="mt-5 newsletter d-flex align-items-center justify-content-center text-center">
      <div className="news-wrap shadow p-4">
        <div className="news mb-4">
          <img src={image} alt="envelope" />
          <h3 className="mt-3">Subscribe to our newsletter</h3>
          <h6>It's a good time to subscribe and get the latest promotion</h6>
        </div>

        <div className="form mt-4" style={{ position: "relative" }}>
          <form>
            <input type="text" className="form-control" style={{padding: '0.7rem 0'}} />
            <input
              type="submit"
              value="Yes please"
              className="button button-small button-primary"
              style={{ position: "absolute" ,bottom: 0, top: "0px", right: '0px' }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
