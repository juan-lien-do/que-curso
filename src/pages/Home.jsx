import React from "react";
import { Button } from "react-bootstrap";
import { Resenas } from "../components/Resenas";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="responsive-container">
        <section style={{ textAlign: "left" }}>
          <h1 className="home-header">Que curso?</h1>
          <p className="home-text">
            <strong>Que curso</strong> nace de la idea de que usualmente los
            estudiantes de ingeniería en sistemas en la UTN - FRC tienen dudas
            acerca de su estado académico en relación a las materias que pueden
            cursar o no pueden cursar, y si bien actualmente existe una solución
            vía tabla de correlatividades, dicha tabla es poco intuitiva y de
            dificil lectura.
          </p>
          <p className="home-text">
            Por eso decidimos crear <strong>"Que curso?"</strong>, la cual, a
            través de una interfaz intuitiva y simple de entender para los
            estudiantes, estos pueden saber su estado académico en relación a
            sus materias con mucha mas facilidad.
          </p>
        </section>
        <div style={{ width: "100%" }}>
          <Resenas />
        </div>
      </div>
      <br></br>
      <div className="col-12 text-center">
        <Button
          className="goToMateriasBtn"
          onClick={() => navigate("/materias/")}
        >
          Ver mis Materias
          <i className="bi bi-arrow-right" style={{ marginLeft: "8px" }}></i>
        </Button>
      </div>
    </>
  );
};
