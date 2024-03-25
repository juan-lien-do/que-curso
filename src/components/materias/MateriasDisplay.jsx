import { useState, useRef, useEffect } from "react";
import { VIDatosMaterias } from "../../constants/constants";
import DownloadPDFButton from "./downloadPDFButton";
import "./MateriasDisplay.css";

export const MateriasDisplay = () => {
  const [datosMaterias, setDatosMaterias] = useState(() => {
    const datosPersistentes = window.localStorage.getItem("QueCursoMats");
    return datosPersistentes ? JSON.parse(datosPersistentes) : VIDatosMaterias;
  });
  const datosMateriasRef = useRef(datosMaterias);

  // Cada vez que cambie alguna materia, actualizar el ref y guardar en el Local Storage
  useEffect(() => {
    datosMateriasRef.current = datosMaterias;
    window.localStorage.setItem("QueCursoMats", JSON.stringify(datosMaterias));
    console.log("materias updated: ", datosMateriasRef.current);
  }, [datosMaterias]);

  // no se que hace esto
  useEffect(() => {
    datosMateriasRef.current.forEach((x) => {
      notificarMaterias(x.id);
    });
  }, []);

  useEffect(() => {
    datosMateriasRef.current.forEach((x) => {
      notificarMaterias(x.id);
    });
  }, [datosMaterias]); // Ejecutar cuando los datos cambian

  const preguntarPorMaterias = (id) => {
    let currentMateria = datosMateriasRef.current.find((x) => x.id === id);
    let idsMateriasReg = currentMateria.materiasQueNecesitaRegulares;
    let idsMateriasApr = currentMateria.materiasQueNecesitaAprobadas;

    if (
      datosMateriasRef.current
        .filter((x) => idsMateriasReg.filter((y) => y === x.id).length > 0)
        .filter((x) => x.estado < 2).length > 0
    )
      return false;
    else if (
      datosMateriasRef.current
        .filter((x) => idsMateriasApr.filter((y) => y === x.id).length > 0)
        .filter((x) => x.estado < 3).length > 0
    )
      return false;
    else return true; // Esto significa que la materia se puede cursar.
  };

  const unlockMateria = (id) => {
    setDatosMaterias((prevState) => {
      return prevState.map((materia) => {
        if (materia.id === id) {
          return {
            ...materia,
            estado: materia.estado < 3 ? 1 : 0,
          };
        }
        return materia;
      });
    });
  };

  const lockMateria = (id) => {
    setDatosMaterias((prevState) => {
      return prevState.map((materia) => {
        if (materia.id === id) {
          return {
            ...materia,
            estado: 0,
          };
        }
        return materia;
      });
    });
  };

  const updateEstadoMateria = (id) => {
    setDatosMaterias((prevState) => {
      return prevState.map((materia) => {
        if (materia.id === id) {
          return {
            ...materia,
            estado: materia.estado < 3 ? materia.estado + 1 : 1,
          };
        }
        return materia;
      });
    });
  };

  const notificarMaterias = (id) => {
    let currentMateria = datosMateriasRef.current.find((x) => x.id === id);
    let idsMateriasNotif = currentMateria.materiasQueActualiza;

    idsMateriasNotif.forEach((idMat) => {
      let materiaToUpdate = datosMateriasRef.current.find(
        (x) => x.id === idMat
      );
      if (preguntarPorMaterias(idMat) && materiaToUpdate.estado === 0) {
        unlockMateria(idMat);
      } else if (!preguntarPorMaterias(idMat) && materiaToUpdate.estado !== 0) {
        lockMateria(idMat);
      }
    });
  };

  const handleCambioEstado = (id) => {
    if (datosMateriasRef.current.find((x) => x.id === id).estado !== 0) {
      console.log("se puede cursar");
      updateEstadoMateria(id);
      // Notificar materias solo si el estado cambió
      console.log(datosMateriasRef.current);
    } else {
      console.log("no se puede cursar");
    }
  };

  const getStyle = (estado) => {
    switch (estado) {
      case 0:
        return "rounded mx-1 my-1 px-2 py-2 col-5 col-lg-2 btn btn-dark";
      case 1:
        return "rounded mx-1 my-1 px-2 py-2 col-5 col-lg-2 btn cursar";
      case 2:
        return "rounded mx-1 my-1 px-2 py-2 col-5 col-lg-2 btn regular";
      default:
        return "rounded mx-1 my-1 px-2 py-2 col-5 col-lg-2 btn aprobar";
    }
  };

  return (
    <div >
      <div id="descargable">
        <h1 className="colors-header">Colores</h1>
        <div class="item">
          <div class="square1"></div>
          <p className="a">No podés cursar</p>
        </div>
        <div class="item">
          <div class="square2"></div>
          <p className="a">Podés cursar</p>
        </div>
        <div class="item">
          <div class="square3"></div>
          <p className="a">Estás regular</p>
        </div>
        <div class="item">
          <div class="square4"></div>
          <p className="a">Aprobaste :D</p>
        </div>
        <div className="container-fluid mb-5">
          <hr />
          <p className="year-header">Primero</p>
          <div className="row">
            {datosMaterias.slice(0, 9).map((x, index) => (
              <button
                disabled={false}
                className={getStyle(x.estado)}
                onClick={() => {
                  handleCambioEstado(x.id);
                }}
                key={`1ro-${index}`}
              >
                <h4>{x.nombre}</h4>
              </button>
            ))}
          </div>
          <hr />
          <p className="year-header">Segundo</p>
          <div className="row">
            {datosMaterias.slice(9, 17).map((x, index) => (
              <button
                disabled={false}
                className={getStyle(x.estado)}
                onClick={() => {
                  handleCambioEstado(x.id);
                }}
                key={`2do-${index}`}
              >
                <h4>{x.nombre}</h4>
              </button>
            ))}
          </div>
          <hr />
          <p className="year-header">Tercero</p>
          <div className="row">
            {datosMaterias.slice(17, 23).map((x, index) => (
              <button
                disabled={false}
                className={getStyle(x.estado)}
                onClick={() => {
                  handleCambioEstado(x.id);
                }}
                key={`3ro-${index}`}
              >
                <h4>{x.nombre}</h4>
              </button>
            ))}
          </div>
          <hr />
          <p className="year-header">Tercero Electivas + Seminario</p>
          <div className="row">
            {datosMaterias.slice(36, 38).map((x, index) => (
              <button
                disabled={false}
                className={getStyle(x.estado)}
                onClick={() => {
                  handleCambioEstado(x.id);
                }}
                key={`3ro-${index}`}
              >
                <h4>{x.nombre}</h4>
              </button>
            ))}
          </div>
          <hr />
          <p className="year-header">Cuarto</p>
          <div className="row">
            {datosMaterias.slice(23, 30).map((x, index) => (
              <button
                disabled={false}
                className={getStyle(x.estado)}
                onClick={() => {
                  handleCambioEstado(x.id);
                }}
                key={`4to-${index}`}
              >
                <h4>{x.nombre}</h4>
              </button>
            ))}
          </div>
          <hr />
          <p className="year-header">Cuarto Electivas</p>
          <div className="row">
            {datosMaterias.slice(38, 45).map((x, index) => (
              <button
                disabled={false}
                className={getStyle(x.estado)}
                onClick={() => {
                  handleCambioEstado(x.id);
                }}
                key={`4to-${index}`}
              >
                <h4>{x.nombre}</h4>
              </button>
            ))}
          </div>
          <hr />
          <p className="year-header">Quinto</p>
          <div className="row">
            {datosMaterias.slice(30, 36).map((x, index) => (
              <button
                disabled={false}
                className={getStyle(x.estado)}
                onClick={() => {
                  handleCambioEstado(x.id);
                }}
                key={`5to-${index}`}
              >
                <h4>{x.nombre}</h4>
              </button>
            ))}
          </div>
          <hr />
          <p className="year-header">Quinto electivas</p>
          <div className="row">
            {datosMaterias.slice(45, 56).map((x, index) => (
              <button
                disabled={false}
                className={getStyle(x.estado)}
                onClick={() => {
                  handleCambioEstado(x.id);
                }}
                key={`5to-${index}`}
              >
                <h4>{x.nombre}</h4>
              </button>
            ))}
          </div>
          <hr />
        </div>
      </div>
      <div className="mx-auto mt-2" style={{marginBottom:"100px"}}>
              <DownloadPDFButton></DownloadPDFButton>
      </div>
    </div>
  );
};
