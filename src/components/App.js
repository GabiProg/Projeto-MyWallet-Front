import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaRegistros from "./TelaRegistros";
import TelaEntrada from "./TelaEntrada";
import TelaSaida from "./TelaSaida";

import '../assets/Reset.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/sign-up" element={<TelaCadastro />} />
          <Route path="/home" element={<TelaRegistros />} />
          <Route path="/deposit" element={<TelaEntrada />} />
          <Route path="/cashout" element={<TelaSaida />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
