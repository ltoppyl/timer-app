import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import SettingTime from "./SettingTime";

type Props = {
  expiryTimestamp: Date;
};

const ActionSelectButton = ({ expiryTimestamp }: Props) => {
  const { start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <HStack justifyContent={"center"}>
      <Button colorScheme="black" variant="outline" onClick={start}>
        Start
      </Button>
      <Button colorScheme="black" variant="outline" onClick={pause}>
        Pause
      </Button>
      <Button colorScheme="black" variant="outline" onClick={resume}>
        Resume
      </Button>
      <Button
        colorScheme="black"
        variant="outline"
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </Button>
      <SettingTime />
    </HStack>
  );
};

export default ActionSelectButton;
