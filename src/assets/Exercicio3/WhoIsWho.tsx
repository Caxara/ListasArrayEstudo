import { useState } from "react";
import IvaImg from "./Iva.jpg";
import jonImg from "./jon.jpg";
import "./index.css";

export default function WhoIsWho() {
  const [SelecionarPessoa, setSelecionarPessoa] = useState("");

  /*Cria uma variável para renderizar a imagem selecionada*/
  const renderImage = function () {
    if (SelecionarPessoa === "iva") {
      return <img src={IvaImg} alt="Foto de perfil do Ivã" />;
    } else if (SelecionarPessoa === "jon") {
      return <img src={jonImg} alt="Foto de perfil do Jon" />;
    }
    return null; /*Retorna null(nada) se nenhuma pessoa estiver selecionada*/
  };

  function escolherIva() {
    setSelecionarPessoa("iva"); /*Altera para Ivã quando clicado */
  }
  function escolherJon() {
    setSelecionarPessoa("jon"); /*Altera para Jon quando clicado */
  }

  return (
    <div className="conteinerImpressao">
      <div
        className="imagemPerfil" /*Espaço onde aparecerá a imagem/configurações do seu tamanho*/
      >
        {renderImage()} {/* Chama a função para renderizar a imagem*/}
      </div>
      <div
        className="espaçoBotoes" /*Espaço onde os botões estão inseridos e suas configurações*/
      >
        <div className="buttonConteiner">
          <button className="hoverButton" onClick={escolherIva}>
            Ivã
          </button>
        </div>
        <div className="buttonConteiner">
          <button className="hoverButton" onClick={escolherJon}>
            Jon
          </button>
        </div>
      </div>
    </div>
  );
}

/*function potenciador(n: number, p: number): number {
  return n ** p;
}

const potenciador2 = (n: number, p: number): number => n ** p;

potenciador(2, 3);

function aprender() {
  `
  
  `;
}*/
