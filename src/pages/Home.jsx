import React from "react";
import { Button } from "react-bootstrap";
import { Resenas } from "../components/Resenas";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="responsive-container" >
        <section className="section-container" >
          <h1 className="home-header" >Que curso?</h1>
          <p className="home-text">
            <strong>"Que curso?"</strong> surge de la necesidad de simplificar
             la consulta del estado académico de los estudiantes de ingeniería
              en sistemas en la UTN - FRC respecto a las materias que pueden
               cursar. Actualmente, esta información se encuentra en una tabla
                de correlatividades que resulta poco intuitiva y difícil de leer.
          </p>
          <p className="home-text">
            Por eso decidimos crear <strong>"Que curso?"</strong>, la cual, a
            través de una interfaz intuitiva y simple de entender para los
            estudiantes, estos pueden saber a qué materias anotarse en base a
            sus materias con mucha mas facilidad.
          </p>
        </section>
        <div className="col-12 text-center ">
          <Button
            className="goToMateriasBtn"
            onClick={() => navigate("/materias/")}
          >
            Ver mis Materias
            <i className="bi bi-arrow-right" style={{ marginLeft: "8px" }}></i>
          </Button>
        </div>
        <div className="w-75 mx-auto mt-5">
          <Resenas />
        </div>
      </div>
    </>
  );
};
