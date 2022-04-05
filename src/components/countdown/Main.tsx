import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HStack, useToast } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import { useSound } from "use-sound";
import sound from "../../sounds/sound.mp3";
import ActionSelectButton from "./ActionSelectButton";
import DisplayTime from "./DisplayTime";
import SettingTime from "./SettingTime";
import MenuFunction from "./MenuFunction";
import DisplaySettingTime from "./DisplaySettingTime";
import useJudgeUpperLimitUnits from "../../hooks/useJudgeUpperLimitUnits";

type Props = {
  settingTime: number;
  setSettingTime: Dispatch<SetStateAction<number>>;
  expiryTimestamp: Date;
};

const Timer = ({ settingTime, setSettingTime, expiryTimestamp }: Props) => {
  const toast = useToast();
  const { seconds, minutes, hours, days, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
  });
  const [play] = useSound(sound);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [effectToast, setEffectToast] = useState<boolean>(false);

  const displayDay = Math.floor(settingTime / 86400);
  const displayHour = Math.floor((settingTime - displayDay * 86400) / 3600);
  const displayMinute = Math.floor((settingTime - (displayDay * 86400 + displayHour * 3600)) / 60);
  const displaySecond =
    settingTime - (displayDay * 86400 + displayHour * 3600 + displayMinute * 60);

  const upperLimitUnits = useJudgeUpperLimitUnits(displayDay, displayHour, displayMinute);

  if (isRunning === true && days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    setEffectToast(true);
    setIsRunning(false);
  }

  useEffect(() => {
    if (effectToast === true) {
      toast({
        title: "時間だよー",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      play();
    }
  }, [effectToast, play, toast]);

  return (
    <>
      <DisplayTime days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <DisplaySettingTime
        day={displayDay}
        hour={displayHour}
        minute={displayMinute}
        second={displaySecond}
        isRunning={isRunning}
        upperLimitUnits={upperLimitUnits.upperLimitUnits}
      />
      <HStack justifyContent={"center"}>
        <ActionSelectButton
          start={start}
          pause={pause}
          resume={resume}
          restart={restart}
          settingTime={settingTime}
          setSettingTime={setSettingTime}
          setIsRunning={setIsRunning}
          setEffectToast={setEffectToast}
        ></ActionSelectButton>
        <SettingTime setSettingTime={setSettingTime} />
        <MenuFunction />
      </HStack>
    </>
  );
};
export default Timer;
