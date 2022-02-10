import React, { Dispatch, SetStateAction } from "react";
import { Button, HStack } from "@chakra-ui/react";

type Props = {
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean | undefined) => void;
  settingTime: number;
  setSettingTime: Dispatch<SetStateAction<number>>;
  selectLanguage: string;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
};

const ActionSelectButton = ({
  start,
  pause,
  resume,
  restart,
  settingTime,
  selectLanguage,
  setIsRunning,
}: Props) => {
  return (
    <HStack justifyContent={"center"}>
      {selectLanguage === "English" ? (
        <>
          <Button
            colorScheme="black"
            variant="outline"
            onClick={() => {
              setIsRunning(true);
              const time = new Date();
              time.setSeconds(time.getSeconds() + settingTime);
              restart(time);
            }}
          >
            Start
          </Button>
          <Button
            colorScheme="black"
            variant="outline"
            onClick={() => {
              setIsRunning(false);
              pause();
            }}
          >
            Pause
          </Button>
          <Button
            colorScheme="black"
            variant="outline"
            onClick={() => {
              setIsRunning(true);
              resume();
            }}
          >
            Resume
          </Button>
        </>
      ) : (
        <>
          <Button
            colorScheme="black"
            variant="outline"
            onClick={() => {
              setIsRunning(true);

              const time = new Date();
              time.setSeconds(time.getSeconds() + settingTime);
              restart(time);
            }}
          >
            開始
          </Button>
          <Button
            colorScheme="black"
            variant="outline"
            onClick={() => {
              setIsRunning(false);
              pause();
            }}
          >
            停止
          </Button>
          <Button
            colorScheme="black"
            variant="outline"
            onClick={() => {
              setIsRunning(true);
              resume();
            }}
          >
            再開
          </Button>
        </>
      )}
    </HStack>
  );
};

export default ActionSelectButton;
