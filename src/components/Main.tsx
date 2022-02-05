import React, { useState } from "react";
import { HStack, Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import ActionSelectButton from "./ActionSelectButton";
import DisplayTime from "./DisplayTime";
import SettingTime from "./SettingTime";
import MenuFunction from "./MenuFunction";

type Props = {
  settingTime: number;
  setSettingTime: React.Dispatch<React.SetStateAction<number>>;
  expiryTimestamp: Date;
};

const Timer = ({ settingTime, setSettingTime, expiryTimestamp }: Props) => {
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  const [selectLanguage, setSelectLanguage] = useState<string>("English");
  const displayDay = Math.floor(settingTime / 86400);
  const displayHour = Math.floor((settingTime - displayDay * 86400) / 3600);
  const displayMinute = Math.floor((settingTime - (displayDay * 86400 + displayHour * 3600)) / 60);
  const displaySecond =
    settingTime - (displayDay * 86400 + displayHour * 3600 + displayMinute * 60);

  return (
    <>
      <DisplayTime days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <HStack justifyContent={"center"}>
        <Text textAlign={"center"}>【{isRunning ? "Running" : "Not running"}】</Text>
        <Text textAlign={"center"}>
          設定時間：{displayDay}d {displayHour}h {displayMinute}m {displaySecond}s
        </Text>
      </HStack>
      <HStack justifyContent={"center"}>
        <ActionSelectButton
          start={start}
          pause={pause}
          resume={resume}
          restart={restart}
          settingTime={settingTime}
          setSettingTime={setSettingTime}
        ></ActionSelectButton>
        <SettingTime setSettingTime={setSettingTime} />
        <MenuFunction setSelectLanguage={setSelectLanguage} />
      </HStack>
    </>
  );
};
export default Timer;
