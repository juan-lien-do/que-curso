import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const SendFeedBack = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data) => {
    data.stars = parseInt(data.stars);
    console.log(data);
    navigate("/");
    await axios.post(
      "https://que-curso-backend.onrender.com/api/que_curso/email",
      data
    );
  };

  return (
    <div className="responsive-container">
      <section className="section-container">
        <h1 className="home-header">Enviar FeedBack</h1>
        <p className="home-text">
          En esta sección podés enviarnos un feedback sobre tu experiencia en la
          página, junto con sugerencias para seguir mejorando, por favor ingresá
          tu nombre, algo que quieras comentarnos, y como calificás al sitio :)
        </p>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Nombre*</Form.Label>
          <Controller
            name="nombre"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: /^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ\s]+$/,
                message: "Porfavor, ingresá solo letras en este campo.",
              },
              maxLength: {
                value: 30,
                message: "Máximo 30 caracteres",
              },
            }}
            render={({ field }) => (
              <Form.Control
                type="text"
                placeholder="Ingresá tu nombre"
                {...field}
              />
            )}
          />
          {errors.nombre && (
            <p style={{ color: "darkred" }}>{errors.nombre.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>FeedBack*</Form.Label>
          <Controller
            name="resena"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: /^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ\s]+$/,
                message: "Porfavor, ingresá solo letras en este campo.",
              },
              maxLength: {
                value: 200,
                message: "Máximo 200 caracteres",
              },
              minLength: {
                value: 10,
                message: "Mínimo 10 caracteres",
              },
            }}
            render={({ field }) => (
              <Form.Control
                type="text"
                placeholder="Ingresá tu feedback"
                {...field}
              />
            )}
          />
          {errors.resena && (
            <p style={{ color: "darkred" }}>{errors.resena.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Rating ⭐*</Form.Label>
          <Controller
            name="stars"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: /^[0-9]+$/,
                message:
                  "Por favor, ingresá solo números positivos en este campo.",
              },
              min: {
                value: 1,
                message: "El valor mínimo es 1.",
              },
              max: {
                value: 5,
                message: "El valor máximo es 5.",
              },
            }}
            render={({ field }) => (
              <Form.Control
                type="number"
                placeholder="Ingresá tu rating (entre 1 y 5 ⭐)"
                {...field}
              />
            )}
          />
          {errors.stars && (
            <p style={{ color: "darkred" }}>{errors.stars.message}</p>
          )}
        </Form.Group>
      </section>
      <div className="col-12 text-center ">
        <Button className="goToMateriasBtn" onClick={handleSubmit(onSubmit)}>
          Enviar Reseña
          <i className="bi bi-arrow-right" style={{ marginLeft: "8px" }}></i>
        </Button>
      </div>
      <div className="col-12 text-center ">
        <Button className="backFAQ" onClick={() => navigate("/")}>
          <i className="bi bi-house-fill" style={{ marginRight: "4px" }}></i>
          Inicio
        </Button>
      </div>
    </div>
  );
};

export { SendFeedBack };
