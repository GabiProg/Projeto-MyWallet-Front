import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EntradasItens from "./EntradasItens";
import SaidasItens from "./SaidasItens";
import styled from "styled-components";
import axios from "axios";

export default function TelaRegistros() {
  const [entradas, setEntradas] = useState();
  const [saidas, setSaidas] = useState();

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("infoToken"));
  const userName = JSON.parse(localStorage.getItem("infoName"));

  useEffect(() => {
    const URL = "http://localhost:5000/home";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
    promise.then((res) => {
      const { data } = res;
      setEntradas(data.getEntradas);
      setSaidas(data.getSaidas);
      console.log(data);
    });
    promise.catch((err) => {
      console.log(err.status);
    });
  }, []);

  function MensagemRegistrosVazios(){
    if(entradas < 0 || saidas < 0 ){
      (<Mensagem>Não há registros de entrada ou saída</Mensagem>)
    }
  }

  // function pegarValoresPositivos(){
  //  const valoresPositivos = entradas?.map(v => Number(v.value));
  //  console.log(valoresPositivos);
  //  let sum = 0;
  //  for(let i = 0; i < valoresPositivos.length; i++){
  //   sum += valoresPositivos[i];
  //   console.log(sum);
  //  }
  // }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Conteiner>
      <Title>
        <h1>Olá, {userName}</h1>
        <ion-icon name="exit-outline" onClick={handleLogout}></ion-icon>
      </Title>
      <Board>
        {MensagemRegistrosVazios()}
          <Entradas>
            {entradas?.map((item) => (
              <EntradasItens
                key={item._id}
                id={item._id}
                data={item.data}
                description={item.description}
                value={item.value}
              />
            ))}
          </Entradas>
          <Saidas>
            {saidas?.map((item) => (
              <SaidasItens
                key={item._id}
                id={item._id}
                data={item.data}
                description={item.description}
                value={item.value}
              />
            ))}
          </Saidas>
          <Box><div><p>SALDO</p><h5>0000</h5></div></Box>
      </Board>
      <Buttons>
        <Link to="/deposit">
          <Add>
            <div>
              <ion-icon name="add-circle-outline"></ion-icon>
              <p>Nova entrada</p>
            </div>
          </Add>
        </Link>
        <Link to="/cashout">
          <Remove>
            <div>
              <ion-icon name="remove-circle-outline"></ion-icon>
              <p>Nova saída</p>
            </div>
          </Remove>
        </Link>
      </Buttons>
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
  position: relative;
`;

const Box = styled.div`
  width: 326px;
  left: 24px;
  position: fixed;
  bottom: 147px;

    div{
      display: flex;
      justify-content: space-between;
    }

    p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    background: #FFFFFF;
  }

  h5{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    background: #FFFFFF;
  }
`;

const Title = styled.div`
  width: 326px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }

  ion-icon {
    font-size: 30px;
    color: #ffffff;
  }
`;

const Board = styled.div`
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 13px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  position: relative;
`;

const Mensagem = styled.div`
  width: 180px;
  height: 46px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  padding: 200px 73px 200px 73px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
`;

const Add = styled.div`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 64px;
    height: 94.44px;
    padding-left: 10px;
    padding-top: 10.56px;
  }

  ion-icon {
    font-size: 30px;
    color: #ffffff;
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
`;

const Remove = styled.div`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 64px;
    height: 94.44px;
    padding-left: 10px;
    padding-top: 10.56px;
  }

  ion-icon {
    font-size: 30px;
    color: #ffffff;
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
`;

const Entradas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  h4 {
    margin-right: 12px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }

  p {
    margin-right: 48px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #03ac00;
  }
`;
const Saidas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  h4 {
    margin-right: 12px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }

  p {
    margin-right: 48px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #c70000;
  }
`;
