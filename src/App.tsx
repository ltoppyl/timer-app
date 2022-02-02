import { Container } from "@chakra-ui/react";
import React from "react";
import Main from "./components/Main";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 0);

  return (
    <Container maxW="container.sm">
      <Main expiryTimestamp={time} />
    </Container>
  );
}

export default App;
