import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Material = () => {
  const navigate = useNavigate();

  return (
    <div className="responsive-container">
      <section className="section-container">
        <h1 className="home-header">Material</h1>
        <div className="row">
          <div className="col col-lg">
            <p className="px-2 py-2 mx-auto fs-5" > En esta sección, vas a encontrar apuntes, bibliografías,
            presentaciones, actividades, trabajos prácticos, exámenes, y clases grabadas de casi todas las materias de la carrera de
            Ingeniería en Sistemas de Información.</p>
          </div>
          <div className="row align-items-center mx-auto" >
            <div className="ms-1 me-auto col-md-6 mt-1 mb-4 card align-items-center" style={{backgroundColor:"#865684"}}>
              <h3 style={{color:"rgb(254, 123, 124)"}}>
                Acceso a resúmenes
              </h3>
              <p className="text-white"> Hay resúmenes, tomas de nota, TP's de primer año a tercer año. Hacé click en "Ver resúmenes" para ir a la carpeta Drive. </p>
            </div>
            <div className="col-md-5 text-center mb-4">
              <Button
                className="goToMateriasBtn"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1gjfTvzjQmogv7c-6SN0IG6Edr0DOx4pt",
                    "_blank"
                  )
                }
              >
                Ver resúmenes
                <i className="bi bi-arrow-right" style={{ marginLeft: "8px" }}></i>
              </Button>
            </div>
            <div className="ms-1 me-auto col-md-6 mt-1 mb-4 card align-items-center" style={{backgroundColor:"#865684"}}>
              <h3 style={{color:"rgb(254, 123, 124)"}}>
                Clases grabadas
              </h3>
              <p className="text-white"> Clases grabadas durante la pandemia. Corresponden a los cursos 1k6, 2k1, 2k11 y otros. Al final no eran solo dos semanas de vacaciones. Elegí uno de los dos canales y accedé a las clases grabadas haciendo click.</p>
            </div>
            <div className="col-md-5">
              <div className="text-center mb-4">
                <Button
                  className="goToMateriasBtn "
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@clasessistemas7034",
                      "_blank"
                    )
                  }
                >
                  Canal 1
                  <i className="bi bi-arrow-right" style={{ marginLeft: "8px" }}></i>
                </Button>
              </div>
              <div className="text-center mb-4">
                <Button
                  className="goToMateriasBtn "
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@UTN1k6",
                      "_blank"
                    )
                  }
                >
                  Canal 2
                  <i className="bi bi-arrow-right" style={{ marginLeft: "8px" }}></i>
                </Button>
              </div>
            </div>
        </div>
        </div>
        
        
        
      </section>
      
      <div className="col-12 text-center mb-5">
        <Button className="goToMateriasBtn" onClick={() => navigate("/")}>
          <i className="bi bi-house-fill" style={{ marginRight: "4px" }}></i>
          Inicio
        </Button>
      </div>
    </div>
  );
};

export { Material };
