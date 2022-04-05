import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import MainCountdown from "./components/countdown/MainCountdown";

function App() {
  const time = new Date();
  const [settingTime, setSettingTime] = useState<number>(0);
  time.setSeconds(time.getSeconds() + settingTime);

  return (
    <Container maxW="container.sm">
      <MainCountdown
        settingTime={settingTime}
        setSettingTime={setSettingTime}
        expiryTimestamp={time}
      />
    </Container>
  );
}

export default App;
