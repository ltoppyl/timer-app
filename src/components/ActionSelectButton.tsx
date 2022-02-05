import React from "react";
import { Button, HStack } from "@chakra-ui/react";

type Props = {
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean | undefined) => void;
  settingTime: number;
  setSettingTime: React.Dispatch<React.SetStateAction<number>>;
};

const ActionSelectButton = ({ start, pause, resume, restart, settingTime }: Props) => {
  return (
    <HStack justifyContent={"center"}>
      <Button
        colorScheme="black"
        variant="outline"
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + settingTime);
          restart(time);
        }}
      >
        Start
      </Button>
      <Button colorScheme="black" variant="outline" onClick={pause}>
        Pause
      </Button>
      <Button colorScheme="black" variant="outline" onClick={resume}>
        Resume
      </Button>
    </HStack>
  );
};

export default ActionSelectButton;
