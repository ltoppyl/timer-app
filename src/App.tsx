import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import Main from "./components/countdown/Main";

function App() {
  const time = new Date();
  const [settingTime, setSettingTime] = useState<number>(0);
  time.setSeconds(time.getSeconds() + settingTime);

  return (
    <Container maxW="container.sm">
      <Main settingTime={settingTime} setSettingTime={setSettingTime} expiryTimestamp={time} />
    </Container>
  );
}

export default App;
