import React from "react";
import { Button, HStack } from "@chakra-ui/react";

type Props = {
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean | undefined) => void;
  settingTime: number;
  setSettingTime: React.Dispatch<React.SetStateAction<number>>;
  selectLanguage: string;
};

const ActionSelectButton = ({
  start,
  pause,
  resume,
  restart,
  settingTime,
  selectLanguage,
}: Props) => {
  return (
    <HStack justifyContent={"center"}>
      {selectLanguage === "English" ? (
        <>
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
        </>
      ) : (
        <>
          <Button
            colorScheme="black"
            variant="outline"
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + settingTime);
              restart(time);
            }}
          >
            開始
          </Button>
          <Button colorScheme="black" variant="outline" onClick={pause}>
            停止
          </Button>
          <Button colorScheme="black" variant="outline" onClick={resume}>
            再開
          </Button>
        </>
      )}
    </HStack>
  );
};

export default ActionSelectButton;
