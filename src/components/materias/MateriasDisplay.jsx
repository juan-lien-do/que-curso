import { useState, useRef, useEffect } from "react";
import { VIDatosMaterias } from "../../constants/constants";

export const MateriasDisplay = () => {
  const [datosMaterias, setDatosMaterias] = useState(VIDatosMaterias);
  const datosMateriasRef = useRef(datosMaterias);

  // cada vez que cambie alguna materia, que cambie el ref y haga un log del nuevo ref
  useEffect(() => {
    datosMateriasRef.current = datosMaterias;
    console.log("materias updated: ", datosMateriasRef.current);
  }, [datosMaterias]);

  // no se que hace esto
  useEffect(() => {
    datosMateriasRef.current.forEach((x) => {
      notificarMaterias(x.id);
    });
  });

  useEffect(() => {
    datosMateriasRef.current.forEach((x) => {
      notificarMaterias(x.id);
    });
  }, [datosMaterias]); // Ejecutar cuando los datos cambian

  // preguntar si la materia se puede cursar o no
  const preguntarPorMaterias = (id) => {
    let currentMateria = datosMateriasRef.current.find((x) => x.id === id); // busco la materia segun el id
    let idsMateriasReg = currentMateria.materiasQueNecesitaRegulares; // las materias que necesita regulares para cursar la materia encontrada
    let idsMateriasApr = currentMateria.materiasQueNecesitaAprobadas; // las materias que necesita aprobadas para cursar la materia encontrada

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

  // actualiza el estado de la materia
  const updateEstadoMateria = (id) => {
    setDatosMaterias((prevState) => {
      return prevState.map((materia) => {
        if (materia.id === id) {
          console.log("materia a actualizar: ", materia);
          console.log("nuevo estado: ", materia.estado + 1);
          return {
            ...materia,
            estado: materia.estado < 3 ? materia.estado + 1 : 1,
          };
        }
        return materia;
      });
    });
  };

  // actualiza el estado de las materias correlativas a la materia pulsada
  const notificarMaterias = (id) => {
    let currentMateria = datosMateriasRef.current.find((x) => x.id === id);
    let idsMateriasNotif = currentMateria.materiasQueActualiza; // materias, que si, cambia el estado de la materia pasada por id, su esado se debe actualizar

    idsMateriasNotif.forEach((idMat) => {
      let materiaToUpdate = datosMateriasRef.current.find(
        (x) => x.id === idMat
      );
      if (preguntarPorMaterias(idMat) && materiaToUpdate.estado === 0) {
        updateEstadoMateria(idMat);
      }
    });
  };

  // cambiar el estado de la materia si esta se puede cursar
  const handleCambioEstado = (id) => {
    if (preguntarPorMaterias(id)) {
      // Notificar materias solo si el estado cambió
      console.log("se puede cursar");
      updateEstadoMateria(id);
    } else {
      console.log("no se puede cursar");
    }
    notificarMaterias(id);
  };

  const getStyle = (estado) => {
    switch (estado) {
      case 0: // no se puede cursar
        return "rounded mx-1 my-1 px-2 py-2 col-lg-2 btn btn-dark text-white";
      case 1: // se puede cursar
        return "rounded mx-1 my-1 px-2 py-2 col-lg-2 btn btn-light";
      case 2: // regular
        return "rounded mx-1 my-1 px-2 py-2 col-lg-2 btn btn-secondary";
      default: // aprobada
        return "rounded mx-1 my-1 px-2 py-2 col-lg-2 btn btn-primary";
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <hr></hr>
        primero
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
        segundo
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
        tercero
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
        cuarto
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
        quinto
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
      </div>
    </div>
  );
};
