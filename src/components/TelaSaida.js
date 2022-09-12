import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function TelaSaida() {
  const token = JSON.parse(localStorage.getItem("infoToken"));

  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  const navigate = useNavigate();

  function TakeCashOut(e) {
    e.preventDefault();

    const URL = "http://localhost:5000/cashout";

    const body = {
      description,
      value,
    };

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    const promise = axios.post(URL, body, config);
    promise.then((res) => {
      navigate("/home");
    });
    promise.catch((err) => {
      alert("Falha ao fazer o deposito.");
    });
  }

  return (
    <Conteiner>
      <h1>Nova saída</h1>
      <form onSubmit={TakeCashOut}>
        <input
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Salvar saída</button>
      </form>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 375px;
  height: 667px;
  background: #8c11be;
  box-sizing: border-box;

  h1 {
    padding: 25px 0 40px 24px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }

  input {
    margin: 0 10px 13px 15px;
    width: 326px;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
  }

  button {
    width: 326px;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    margin: 0 5px 13px 26px;
  }
`;
