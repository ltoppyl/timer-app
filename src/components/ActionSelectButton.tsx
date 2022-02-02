import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import SettingTime from "./SettingTime";

type Props = {
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean | undefined) => void;
};

const ActionSelectButton = ({ start, pause, resume, restart }: Props) => {
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
