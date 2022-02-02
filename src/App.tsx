import { Container } from "@chakra-ui/react";
import React from "react";

import Time from "./components/Time";

function App() {
  return (
    <Container maxW="container.sm">
      <Time />
    </Container>
  );
}

export default App;
