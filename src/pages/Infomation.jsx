import React from "react";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";

const Information = () => {
  return (
    <div className="container">
      <div className="row">
        <h>Information</h>
        <div className="col-md-6">
          
          <ReactPlayer
            url="https://youtu.be/eKqbV7ub4skI"
            width="100%"
          />
          
        </div>
        <div className="col-md-6">
          
          <ReactPlayer
            url="https://youtu.be/dy2H0UAqx-I"
            width="100%"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Information;
