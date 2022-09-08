import styled from 'styled-components';

export default function TelaEntrada () {
    return(
    <Conteiner>
        <h1>Nova entrada</h1>
        <input placeholder='Valor'/>
        <input placeholder='Descrição'/>
        <button>Salvar entrada</button>
    </Conteiner>
         );
}

const Conteiner = styled.div`
    width: 375px;
    height: 667px;
    background: #8C11BE;
    box-sizing: border-box;

    h1{
        padding: 25px 0 40px 24px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    input{
        margin: 0 10px 13px 15px;
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-left: 15px;
    }

    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        margin: 0 5px 13px 26px;
    }
`;