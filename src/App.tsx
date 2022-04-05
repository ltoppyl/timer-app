import { Container } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxW="container.sm">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
