import React from "react";
import "../styles/Resenas.css";
import Card from "react-bootstrap/Card";

export default function ResenaVacia() {
  

  return (
    <div className="card-container">
      <Card className="card-figure my-2 h-100 ">
        <Card.Body>
          <Card.Title style={{ color: "#FE7B7C", fontWeight: "bold" }}>
            {"Vos"}
          </Card.Title>
          <Card.Text style={{ color: "white" }}>{"¿Qué esperás para darnos tu reseña? Entrá a feedback."}</Card.Text>
          <div className="svg-container">
            <img
                src="/Star.svg" // Ruta de la imagen SVG en la carpeta public
                alt="Estrella"
                width="16"
                height="16"
                className="custom-svg"
                style={{ margin: "2px" }}
              />
              <span className="text-warning fw-bold">?</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
