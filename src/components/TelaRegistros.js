import styled from "styled-components";

export default function TelaRegistros() {
  return (
    <Conteiner>
      <Title>
        <h1>Olá, Fulano</h1>
        <ion-icon name="exit-outline"></ion-icon>
      </Title>
      <Board>
        <div>Não há registros de entrada ou saída</div>
      </Board>
      <Buttons>
        <Add>
          <div>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Nova entrada</p>
          </div>
        </Add>
        <Remove>
          <div>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova saída</p>
          </div>
        </Remove>
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
  align-items: center;
  justify-content: center;

  div {
    width: 180px;
    height: 46px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
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
