//ejemplo useState() y useContext() muy interesante para trabajar con datos
import React from "react";
import { useState, useContext } from "react";

const miContexto = React.createContext(null);
const Componente1 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El Token es: {state.token}</h1>
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesisión es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: "123456",
    sesion: 1,
  };

  const [sesionData, setSesionData] = useState(estadoInicial);
  function actualizarSesion() {
    setSesionData({
      token: "JKOB52",
      sesion: sesionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sesionData}>
      {/*  todo lo que esta dentro puede leer los datos de sesion data y actualizarlos
     si se actualiza, los componentes de aqui tb se actualizarSesion */}

      <Componente1 />
      {/* el componente 1 a su vez pinta el 2 */}
      <button onClick={actualizarSesion}>Actualizar sesión</button>
    </miContexto.Provider>
  );
}
