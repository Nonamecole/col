import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./css/Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="white" variant="light" fixed="top">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="" style={{ width: 150, height: 150 }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto custom-nav">
          <Nav.Link as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/product">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/service">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/modules">
            Modules
          </Nav.Link>
          <Nav.Link as={Link} to="/careers">
            Careers
          </Nav.Link>
          <Nav.Link as={Link} to="/team">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
