// Importando React e Hooks
import React, { useState, useEffect } from 'react';

function ContadorCurtidas() {
  // Estado inicial do contador
  const [curtidas, setCurtidas] = useState(0);

  // useEffect para verificar quando o contador atinge 5 ou mais
  useEffect(() => {
    if (curtidas >= 5) {
      console.log("Curtidas em alta!"); // Mensagem no console
      alert("Curtidas em alta!");      // Mensagem no navegador
    }
  }, [curtidas]); // Dependência: será executado sempre que "curtidas" mudar

  // Função para incrementar o contador
  const adicionarCurtida = () => {
    setCurtidas(curtidas + 1);
  };

  // Renderização
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Contador de Curtidas</h2>
      <p>Curtidas: {curtidas}</p>
      <button onClick={adicionarCurtida}>Curtir 👍</button>
      {curtidas >= 5 && <p style={{ color: "green" }}>Curtidas em alta!</p>}
    </div>
  );
}

export default ContadorCurtidas;
