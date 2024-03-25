import React from "react";
import "../styles/Resenas.css";
import Card from "react-bootstrap/Card";

export default function Resena({ title, description, stars }) {
  const starArray = Array.from({ length: stars }, (_, index) => index + 1);

  return (
    <div className="card-container">
      <Card className="card-figure my-2 h-100 ">
        <Card.Body>
          <Card.Title style={{ color: "#FE7B7C", fontWeight: "bold" }}>
            {title}
          </Card.Title>
          <Card.Text style={{ color: "white" }}>{description}</Card.Text>
          <div className="svg-container">
            {starArray.map((_, index) => (
              <img
                key={index}
                src="/Star.svg" // Ruta de la imagen SVG en la carpeta public
                alt="Estrella"
                width="16"
                height="16"
                className="custom-svg"
                style={{ margin: "2px" }}
              />
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
