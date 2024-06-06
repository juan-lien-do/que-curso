import React from "react";
import "../styles/Resenas.css";
import Resena from "./Resena";
import ResenaVacia from "./ResenaVacia";

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
          stars={5}
        />
        <Resena
          title="Federico"
          description="Epa, esta piola, esta piola pa. "
          stars={4}
        />
        <Resena
          title="Martín"
          description="Está buena la sección de material porque tiene un montón de cosas para estudiar. "
          stars={5}
        />
        <Resena
          title="Agustin"
          description="Muy buena página sirven banda los resúmenes."
          stars={5}
        />
        <Resena
          title="Santiago"
          description="Simple pero MUY util realmente godiness"
          stars={5}
        />
        <ResenaVacia></ResenaVacia>
      </div>
    </section>
  );
};
