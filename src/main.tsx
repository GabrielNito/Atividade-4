import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Sobre from "./pages/Sobre/index.tsx";
import Contato from "./pages/Contato/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";
import Tarefas from "./pages/Tarefas/index.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<NotFound />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
