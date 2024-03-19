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
          description="Es muy útil para cuando tengo dudas sobre mis materias, mucho mejor que la tabla. "
        />
        <Resena
          title="Andres"
          description="La verdad, mi hermana está mas buena que esta app. "
        />
      </div>
    </section>
  );
};
