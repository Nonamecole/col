import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CompanyLogo from "../assets/logo.png";
import "./css/AboutUsSection.css";
import ReactPlayer from "react-player";

const Information = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Information</h1>
      </div>

      <Row className="align-items-center">
        <div className="col-md-6">
          <ReactPlayer url="https://youtu.be/eKqbV7ub4skI" width="100%" />
        </div>
      </Row>
    </div>
  );
};

export default Information;
