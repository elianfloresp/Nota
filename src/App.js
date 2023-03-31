import { useState } from "react";
import "./styles.css";

export default function App() {
  const [nome, setNome] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mensagem2, setMensagem2] = useState("");
  const [cor, setCor] = useState("");

  function mostrarMedia(e) {
    e.preventDefault();
    const media = (Number(nota1) + Number(nota2)) / 2;

    setMensagem(`Media das notas ${media}`);

    if (media >= 6) {
      setMensagem2(`Parabéns, ${nome}! você foi Aprovado(a)`);
      setCor("blue");
    } else {
      setMensagem2(`Você foi reprovado!`);
      setCor("red");
    }
  }

  return (
    <div>
      <h1>Programa Situação do Aluno</h1>
      <form onSubmit={mostrarMedia}>
        <p>
          Nome do Aluno
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </p>
        <p>
          1° Nota
          <input
            type="text"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
          />
        </p>
        <p>
          2° Nota
          <input
            type="text"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
          />
        </p>
        <input type="submit" value="Exibir Média e Situação" />
      </form>
      <h3>{mensagem}</h3>
      <h4 style={{ color: cor }}>{mensagem2}</h4>
    </div>
  );
}
