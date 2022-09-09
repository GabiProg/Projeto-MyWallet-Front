import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from '../contexts/UserContext';

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaRegistros from "./TelaRegistros";
import TelaEntrada from "./TelaEntrada";
import TelaSaida from "./TelaSaida";

import '../assets/Reset.css';

export default function App() {
  const [ token, setToken ] = useState();

  return (
    <>
      <UserContext.Provider value={{token, setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/sign-up" element={<TelaCadastro />} />
            <Route path="/home" element={<TelaRegistros />} />
            <Route path="/deposit" element={<TelaEntrada />} />
            <Route path="/cashout" element={<TelaSaida />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
