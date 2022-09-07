import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaRegistros from "./TelaRegistros";
import TelaSaida from "./TelaSaida";
import TelaEntrada from "./TelaEntrada";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/sign-up" element={<TelaCadastro />} />
          <Route path="/home" element={<TelaRegistros />} />
          <Route path="/withdraw" element={<TelaSaida />} />
          <Route path="/deposit" element={<TelaEntrada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
