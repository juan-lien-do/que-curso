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

  // Esta funcion devuelve un rango de numeros
  function rango(start, stop)
{
     //Esta parte del código hace que los limites superior e inferior sean iguales a los del .slice
    stop--;
    var array = [];

    var length = stop - start; 

    for (var i = 0; i <= length; i++) { 
        array[i] = start;
        start++;
    }

    return array;
}

  const actualizarAnio = (arr) => {
    // Si hay uno que este mas adelantado que el resto, entonces va a intentar
    // igualar a todos. Si todos están al mismo nivel, entonces va a adelantar a todos
    // No debe tomar en cuenta las materias con estado 0

    // Conseguir el valor más alto para el estado.
    let maxValor = 0;
    for (let index = 0; index < arr.length; index++) {
      const element = datosMateriasRef.current[arr[index]].estado;
      if (element > maxValor){
        maxValor = element;
      }
    }
    // Si es 0 entonces no hacer nada
    if (maxValor === 0) return;
    
    // Equiparar el valor más alto al resto de valores
    let flagSonIguales = true;
    for (let index = 0; index < arr.length; index++) {
      const element = datosMateriasRef.current[arr[index]].estado;
      if( element !== 0 && element < maxValor){
        flagSonIguales = false;
        break;
      }
    }

    console.log(flagSonIguales)
    if (flagSonIguales){
      for (let index = 0; index < arr.length; index++) {
        handleCambioEstado(datosMateriasRef.current[arr[index]].id);
      }  
    }
    else{
      for (let index = 0; index < arr.length; index++) {
        const element = datosMateriasRef.current[arr[index]].estado;
        if(element < maxValor)
          handleCambioEstado(datosMateriasRef.current[arr[index]].id);
      } 
    }
    
  }

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
    console.log(id)
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
          <p className="year-header">Primero 
            <button  className="text-decoration-underline fw-bold btn" onClick={()=>{actualizarAnio(rango(0,9))}}>
              {"("}Actualizar todo primero{")"}
            </button>
          </p>
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
          <p className="year-header">Segundo
            <button  className="text-decoration-underline fw-bold btn" onClick={()=>{actualizarAnio(rango(9, 17))}}>
              {"("}Actualizar todo segundo{")"}
            </button>
          </p>
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
          <p className="year-header">Tercero
            <button  className="text-decoration-underline fw-bold btn" onClick={()=>{actualizarAnio(rango(17, 23))}}>
              {"("}Actualizar todo tercero{")"}
            </button>
          </p>
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
          <p className="year-header">Cuarto
            <button  className="text-decoration-underline fw-bold btn" onClick={()=>{actualizarAnio(rango(23, 30))}}>
              {"("}Actualizar todo cuarto{")"}
            </button></p>
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
          <p className="year-header">Quinto
            <button  className="text-decoration-underline fw-bold btn" onClick={()=>{actualizarAnio(rango(30, 36))}}>
              {"("}Actualizar todo quinto{")"}
            </button>
          </p>
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
