import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function TelaCadastro() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmation, setConfirmation] = useState();

  const navigate = useNavigate();

  function EnviarCadastro(e) {
    e.preventDefault();

    const URL = "http://localhost:5000/sign-up";

    const body = {
      name,
      email,
      password,
      confirmation,
    };

    const promise = axios.post(URL, body);
    promise.then((res) => {
      navigate("/");
    });
    promise.catch((err) => {
      alert("Falha ao fazer o cadastro.");
    });
  }

  return (
    <Conteiner>
      <h1>MyWallet</h1>
      <form onSubmit={EnviarCadastro}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          placeholder="Confirme a senha"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
        <Link to="/">
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </form>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 375px;
  height: 667px;
  background: #8c11be;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 28px;
  }

  input {
    width: 326px;
    height: 58px;
    left: 25px;
    top: 173px;
    background: #ffffff;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
    margin-bottom: 13px;
  }

  button {
    width: 326px;
    height: 46px;
    left: 25px;
    top: 457px;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    margin-bottom: 32px;
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
