import Nav from "react-bootstrap/Nav";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Nav className="justify-content-end nav-header">
      <Nav.Item className="header-item">
        <Nav.Link className="header-link" onClick={() => navigate("/")}>
          Inicio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="header-item">
        <Nav.Link className="header-link" onClick={() => navigate("/faq")}>
          FAQ
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
