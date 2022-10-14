import React, { useState } from "react";
//definimos estilo a traves de constantes

const loggedStyle = {
  color: "green",
};

const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};
const GeetingStyled = (props) => {
  //generamos un estado para el componente y asi controlar
  //si usuario esta o no bloqueado

  const [logged, setLogged] = useState(false);
  const greetingUser = <p>Bienvenida {props.name}</p>;
  const pleaseLogin = <p>Por favor logeate</p>;
  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser : pleaseLogin}
      <button onClick={() => setLogged(!logged)}>
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GeetingStyled;
