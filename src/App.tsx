import { Container } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Countdown from "./pages/Countdown";
import Countup from "./pages/Countup";
import Time from "./pages/Time";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxW="container.sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/countup" element={<Countup />} />
          <Route path="/time" element={<Time />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
