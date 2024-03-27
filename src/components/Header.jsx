import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="nav-header navbar-dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ms-auto">
          <Nav.Item className="header-item ">
            <Nav.Link className="header-link" onClick={() => navigate("/")}>
              Inicio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="header-item">
            <Nav.Link
              className="header-link"
              onClick={() => navigate("/material")}
            >
              Material
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="header-item">
            <Nav.Link
              className="header-link"
              onClick={() => navigate("/sendFeedback")}
            >
              FeedBack
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="header-item">
            <Nav.Link className="header-link" onClick={() => navigate("/faq")}>
              FAQ
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
