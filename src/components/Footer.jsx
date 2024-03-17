import Nav from "react-bootstrap/Nav";
import "../styles/Header.css";
import GitHub from "../icons/GitHub";
import Linkedin from "../icons/Linkedin";

export const Footer = () => {
  return (
    <footer style={{ position: "fixed", bottom: "0", width: "100%" }}>
      <Nav className="justify-content-end nav-footer">
        <Nav.Item className="header-item">
          <Nav.Link
            className="header-link"
            onClick={() =>
              window.open("https://github.com/juan-lien-do/que-curso", "_blank")
            }
          >
            <GitHub />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="header-item">
          <Nav.Link
            className="header-link"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/juanestebanliendo/",
                "_blank"
              )
            }
          >
            <Linkedin />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="header-item">
          <Nav.Link
            className="header-link"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bruno-laszlo-virinni-663332268/",
                "_blank"
              )
            }
          >
            <Linkedin />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
};
