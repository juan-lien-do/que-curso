import React from "react";
import "../styles/Resenas.css";
import Card from "react-bootstrap/Card";

export default function Resena({ title, description }) {
  return (
    <div className="card-container">
      <Card className="card-figure">
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          <Card.Text style={{ color: "white" }}>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
