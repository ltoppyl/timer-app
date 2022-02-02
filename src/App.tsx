import { Container, HStack } from "@chakra-ui/react";
import React from "react";

import Time from "./components/Time";
import StartStopButton from "./components/StartStopButton";
import SettingTime from "./components/SettingTime";

function App() {
  return (
    <Container maxW="container.sm">
      <Time />
      <HStack justifyContent={"center"}>
        <StartStopButton />
        <SettingTime />
      </HStack>
    </Container>
  );
}

export default App;
