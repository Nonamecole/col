import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './css/Navbar.css'

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="white" variant="light" fixed="top">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img src={logo} alt="" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto custom-nav">
          <Nav.Link as={Link} to="/" exact className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/product" className="nav-link">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/service" className="nav-link">
            Services
          </Nav.Link>
          <NavDropdown title="Media" id="media-dropdown" className="nav-link">
            <NavDropdown.Item as={Link} to="/team" className="nav-link">
              Our Team
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/poultry" className="nav-link">
              Poultry
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/training" className="nav-link">
              Training Team
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
