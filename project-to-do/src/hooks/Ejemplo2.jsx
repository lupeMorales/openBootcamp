import React from "react";
import { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //vamnos a crear dos contadores
  //cada uno con un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //vamos a crear una referencia con useRef para asociar una variable con un elemento del DOM de l componente (vistaHTML) En vez de usar documente.querySelector...... lo hacemos useRef

  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 2);
  }
  //trabajamos useEffect
  //caso 1: ejecutar siempre un snippet de código. Cada vez q haya un cambio en el estado del codigo se jecuta aquello q este dentro de useEffect

  /*   useEffect(() => {
    console.log("cambio en el estado del componente");
    console.log(miRef);
  }); */

  //caso2: ejecutar solo en algunos casos.solo cuando cambie contador 1
  /* 
  useEffect(() => {
    console.log("cambio CONTADOR1");
    console.log(miRef);
  }, [contador1]); */

  //caso 3: ejacutar cuando cambie contador 1 o contador 2 util si vamos a trabajar con varion estados y queremos controlar varios elementos del mismo

  useEffect(() => {
    console.log("cambio CONTADOR1 o CONTADOR2");
    console.log(miRef);
  }, [contador1, contador2]);
  return (
    <div>
      <h1>Ejemplo useState(), useRef(), useEffect()</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      <h4 ref={miRef}> elemento referenciado</h4>
      <button onClick={incrementar1}>incrementar contado 1</button>
      <button onClick={incrementar2}>incrementar contador 2</button>
    </div>
  );
};
export default Ejemplo2;
