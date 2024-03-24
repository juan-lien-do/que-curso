import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Material = () => {
  const navigate = useNavigate();

  return (
    <div className="responsive-container">
      <section className="section-container">
        <h1 className="home-header">Material</h1>
        <p className="home-text">
          En esta sección, vas a encontrar apuntes, bibliografías,
          presentaciones, actividades, trabajos prácticos, exámenes, y demás
          material de estudio variado de todas las materias de la carrera de
          Ingeniería en Sistemas de Información. Para verlo, pulsá en{" "}
          <strong>"Ver más"</strong>.
        </p>
      </section>
      <div className="col-12 text-center">
        <Button
          className="goToMateriasBtn"
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1gjfTvzjQmogv7c-6SN0IG6Edr0DOx4pt",
              "_blank"
            )
          }
        >
          Ver más
          <i className="bi bi-arrow-right" style={{ marginLeft: "8px" }}></i>
        </Button>
      </div>
      <div className="col-12 text-center">
        <Button className="backFAQ" onClick={() => navigate("/")}>
          <i className="bi bi-house-fill" style={{ marginRight: "4px" }}></i>
          Inicio
        </Button>
      </div>
    </div>
  );
};

export { Material };
