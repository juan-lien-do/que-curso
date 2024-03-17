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

    const preguntarPorMaterias = (id) => {
        let currentMateria = datosMateriasRef.current.find((x)=>x.id === id);
        let idsMateriasReg = currentMateria.materiasQueNecesitaRegulares;
        let idsMateriasApr = currentMateria.materiasQueNecesitaAprobadas;
        
        if (datosMateriasRef.current.filter((x) => idsMateriasReg
            .filter((y) => y === x.id).length > 0 )
            .filter((x) => x.estado < 2).length > 0) return false;

        else if(datosMateriasRef.current.filter((x) => idsMateriasApr
            .filter((y) => y === x.id).length > 0 )
            .filter((x) => x.estado < 3).length > 0) return false;
            
        else return true; // Esto significa que la materia se puede cursar.
    }

    // Estas dos funciones son una copia de updateEstadoMateria:
    // Está modificada para ser utilizada en recursiones de muchos pasos y que
    // sea un método "seguro": ejecutarse repetidas veces lleva al mismo output

    const unlockMateria = (id) => {
        setDatosMaterias(prevState => {
            return prevState.map(materia => {
                if (materia.id === id) {
                    return {
                        ...materia,
                        estado: materia.estado < 3 ? 1 : 0
                    };
                }
                return materia;
            });
        });
    }

    const lockMateria = (id) =>{
        setDatosMaterias(prevState => {
            return prevState.map(materia => {
                if (materia.id === id) {
                    return {
                        ...materia,
                        estado: 0
                    };
                }
                return materia;
            });
        });
    };

    
    // Solo se tiene que ejecutar una vez por cada vez que se toque un botón válido.
    // Aumenta el estado de la materia en 1 o lo vuelve a 1 si es igual a tres.
    const updateEstadoMateria = (id) => {
        setDatosMaterias(prevState => {
            return prevState.map(materia => {
                if (materia.id === id) {
                    return {
                        ...materia,
                        estado: materia.estado < 3 ? materia.estado + 1 : 1
                    };
                }
                return materia;
            });
        });
    };

    // 
    
    const notificarMaterias = (id) => {
        let currentMateria = datosMateriasRef.current.find((x)=>x.id === id);
        let idsMateriasNotif = currentMateria.materiasQueActualiza;
    
        idsMateriasNotif.forEach(idMat => {
            let materiaToUpdate = datosMateriasRef.current.find((x)=>x.id === idMat);
            if(preguntarPorMaterias(idMat) && materiaToUpdate.estado === 0){
                unlockMateria(idMat);
            } else if(!preguntarPorMaterias(idMat) && materiaToUpdate.estado !== 0){
                lockMateria(idMat);
            }
        });
    }
    
    // Esta es la función que acciona el botón. Si el estado lo permite, entonces actualiza el estado
    // a "se puede cursar", "regular" o "aprobada".
    
    const handleCambioEstado = (id) => {
        if (datosMateriasRef.current.find((x) => x.id === id).estado !== 0) {
            console.log("se puede cursar");
            updateEstadoMateria(id);
            // Notificar materias solo si el estado cambió
            console.log(datosMateriasRef.current);
        } else {
            console.log("no se puede cursar");

        }
        return materia;
      });
    });
  };

    };
    const getStyle = (estado) => {
        switch (estado) {
            case 0:
                return "rounded mx-1 my-1 px-2 py-2 col-lg-2 btn btn-dark text-white";
            case 1:
                return "rounded mx-1 my-1 px-2 py-2 col-lg-2 btn btn-light";
            case 2:
                return "rounded mx-1 my-1 px-2 py-2 col-lg-2 btn btn-secondary";
            default:
                return "rounded mx-1 my-1 px-2 py-2 col-lg-2 btn btn-primary"; 
        }
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
