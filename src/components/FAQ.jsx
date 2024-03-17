import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FAQItem } from "./FAQItem";
import "../styles/FAQ.css";

export const FAQ = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2
        style={{
          color: "#990c4e",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          margin: "16px",
        }}
      >
        Preguntas Frecuentes
      </h2>
      <div className="col-12 text-center">
        <Accordion style={{ width: "70%", margin: "auto", padding: "12px" }}>
          <FAQItem
            id="0"
            title="Cómo se usa?"
            description="Estando en la página de inicio, pulsá
              'Ver mis materias', te va a redireccionar al gestor
              de materias, una vez estando ahí, pulsá una vez en las materias
              que hayas cursado, 2 veces en las que hayas regularizado, y 3
              veces en las que hayas aprobado. El programa automáticamente te va
              a marcar tu programa de correlatividades personalizado,
              indicándote que materias podés cursar."
          />
          <FAQItem
            id="1"
            title="Se van a revelar mis datos personales?"
            description="No. 'Que curso?' no guarda ni publica ni vende
              datos de los estudiantes/usuarios de la aplicación"
          />
          <FAQItem
            id="2"
            title="Está para otras carreras?"
            description="No. Actualmente está diseñada únicamente para la carrera de
              Ingeniería en Sistemas."
          />
          <FAQItem
            id="3"
            title="Incluye el plan de electivas?"
            description=" Sí, incluye todas las electivas de la carrera de Ingeniería en
              Sistemas."
          />
        </Accordion>
        <Button className="backFAQ" onClick={() => navigate("/")}>
          <i className="bi bi-house-fill" style={{ marginRight: "4px" }}></i>
          Inicio
        </Button>
      </div>
    </>
  );
};
