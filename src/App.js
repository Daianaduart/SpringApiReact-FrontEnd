import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home";
import Destino from "./Views/Destino";
import Promocao from "./Views/Promocao";
import Contato from "./Views/Contato";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Viagem from "./Views/Viagem";
import ViagemCreate from "./Views/Viagem/Create";
import Cliente from "./Views/Cliente";
import ClienteCreate from "./Views/Cliente/Create";
import Login from "./Views/Login";
import Cadastro from "./Views/Cadastro";



function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Viagem" element={<Viagem />} />
        <Route path="/Viagem-Create" element={<ViagemCreate />} />
        <Route path="/Viagem-Update/:id" element={<ViagemCreate />} />
        <Route path="/Cliente" element={<Cliente />} />
        <Route path="/Cliente-Create" element={<ClienteCreate />} />
        <Route path="/Cliente-Update/:id" element={<ClienteCreate />} />
        <Route path="/Destino" element={<Destino />} />
        <Route path="/Promocao" element={<Promocao />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;