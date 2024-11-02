import { useState } from "react";

export default function OnOff() {
  const [alterador, setalterador] = useState(false);

  let corMudar = "";

  if (alterador === true) {
    corMudar = "yellow";
  } else {
    corMudar = "gray";
  }

  function acender() {
    setalterador(true);
  }

  function apagar() {
    setalterador(false);
  }

  return (
    <div /*corpo geral do return*/
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        border: "2px solid white",
      }}
    >
      <div /*circulo que muda de cor*/
        style={{
          display: "flex",
          backgroundColor: corMudar,
          width: "100px",
          height: "100px",
          borderRadius: "50px",
        }}
      ></div>
      <div /*Contener onde estão os dois botões*/
        style={{
          display: "flex",
          justifyContent: "center",
          height: "30px",
          width: "100%",
          gap: "5px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <button
          onClick={acender}
          style={{
            borderRadius: "10px",
            boxShadow: "2px 2px 2px gray",
            border: "none",
            fontWeight: "bolder",
            color: "green",
            backgroundColor: "black",
            cursor: "pointer",
          }}
        >
          Acender
        </button>
        <button
          onClick={apagar}
          style={{
            borderRadius: "10px",
            boxShadow: "2px 2px 2px gray",
            border: "none",
            fontWeight: "bolder",
            color: "red",
            backgroundColor: "black",
            cursor: "pointer",
          }}
        >
          Apagar
        </button>
      </div>
    </div>
  );
}
