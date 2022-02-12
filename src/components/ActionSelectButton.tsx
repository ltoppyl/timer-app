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
  setEffectToast: Dispatch<SetStateAction<boolean>>;
};

const ActionSelectButton = ({
  start,
  pause,
  resume,
  restart,
  settingTime,
  selectLanguage,
  setIsRunning,
  setEffectToast,
}: Props) => {
  const buttonTextEnglish = ["Start", "Pause", "Resume"];
  const buttonTextJapanese = ["開始", "停止", "再開"];
  let buttonText = ["", "", ""];

  if (selectLanguage === "English") {
    buttonText = buttonTextEnglish;
  } else if (selectLanguage === "Japanese") {
    buttonText = buttonTextJapanese;
  }

  const handleStart = () => {
    setIsRunning(true);
    setEffectToast(false);
    const time = new Date();
    time.setSeconds(time.getSeconds() + settingTime);
    restart(time);
  };

  const handlePause = () => {
    setIsRunning(false);
    pause();
  };

  const handleResume = () => {
    setIsRunning(true);
    resume();
  };

  return (
    <HStack justifyContent={"center"}>
      <Button
        colorScheme="black"
        variant="outline"
        onClick={() => {
          handleStart();
        }}
      >
        {buttonText[0]}
      </Button>
      <Button
        colorScheme="black"
        variant="outline"
        onClick={() => {
          handlePause();
        }}
      >
        {buttonText[1]}
      </Button>
      <Button
        colorScheme="black"
        variant="outline"
        onClick={() => {
          handleResume();
        }}
      >
        {buttonText[2]}
      </Button>
    </HStack>
  );
};

export default ActionSelectButton;
