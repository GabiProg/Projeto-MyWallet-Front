import { Link, useNavigate } from "react-router-dom";
import UserContext from '../contexts/UserContext'
import { useState, useContext } from 'react';
import styled from "styled-components";
import axios from "axios";

export default function TelaLogin() {

  const { setToken } = useContext(UserContext);

  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();

  const navigate = useNavigate();

  function Logar(e){
    e.preventDefault();

    const URL = 'http://localhost:5000/';

    const body = {
      email,
      password
    }

    const promise = axios.post(URL, body);
    promise.then((res) => {
      const { data } = res;
      setToken(data);
      navigate('/home');
    });
    promise.catch((err) =>{
      alert('Falha ao fazer o Login.');
    });

  }

  return (
    <Conteiner>
      <h1>MyWallet</h1>
      <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <input placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <button onClick={Logar}>Entrar</button>
      <Link to="/sign-up">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
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
    margin-bottom: 25px;
  }

  input {
    width: 326px;
    height: 58px;
    left: 25px;
    top: 233px;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 15px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }

  button {
    width: 326px;
    height: 46px;
    left: 23px;
    top: 375px;
    background: #a328d6;
    border-radius: 5px;
    margin-bottom: 36px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
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
