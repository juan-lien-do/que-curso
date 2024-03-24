import React from "react";
import "../styles/Resenas.css";
import Resena from "./Resena";

export const Resenas = () => {
  return (
    <section style={{ marginBottom: "32px" }}>
      <h3
        style={{
          color: "#990c4e",
          textAlign: "center",
          textDecoration: "underline",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Reseñas de usuarios
      </h3>
      <div className="cards-container">
        <Resena
          title="Bruno"
          description="Es muy útil para cuando tengo dudas sobre las materias que puedo cursar o no, mucho mejor que la tabla. "
        />
        <Resena
          title="Federico"
          description="Epa, esta piola, esta piola pa. "
        />
        <Resena
          title="Martín"
          description="Está buena la sección de material porque tiene un montón de cosas para estudiar. "
        />
      </div>
    </section>
  );
};
