import React from "react";
import { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");
  function pressButton() {
    const text = messageRef.current.value;
    alert(`input text: ${text} `);
  }
  function pressButtonParam(text) {
    //el parámetro no s epuede meter directamente, si no se lanzará en el momento del renderizado
    //para ello, tenemos que llamarla a traves de una función anónima:ver linea 21
    alert(`Text: ${text}`);
    console.log("press button 3");
  }
  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }
  return (
    <div style={{ backgroundColor: "papayawhip", padding: "10px" }}>
      <p onMouseOver={() => console.log("on mouse over")}>Hello, I am {name}</p>
      <button onClick={() => console.log("press button 1")}>button 1</button>
      <button onClick={pressButton}>button 2</button>
      <button onClick={() => pressButtonParam("no misiela")}>button 3</button>
      <button onClick={() => send(messageRef.current.value)}>
        send message
      </button>
      <input
        placeholder="insert text"
        onFocus={() => console.log("input focused")}
        onChange={(e) => console.log("input changed:", e.target.value)}
        onCopy={() => console.log("copied text from input")}
        ref={messageRef}
      />
      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
          <input ref={nameRef} placeholder="New Name"></input>
          <button type="submit">Update name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
