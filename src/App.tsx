import { Container /*, HStack*/ } from "@chakra-ui/react";
import React from "react";

// import Time from "./components/Time";
// import StartStopButton from "./components/StartStopButton";
// import SettingTime from "./components/SettingTime";
import Timer from "./components/Timer";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 0);

  return (
    <Container maxW="container.sm">
      <Timer expiryTimestamp={time} />
    </Container>
  );
}

export default App;
