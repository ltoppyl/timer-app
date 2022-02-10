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
  const { seconds, minutes, hours, days, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
  });

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [selectLanguage, setSelectLanguage] = useState<string>("English");
  const displayDay = Math.floor(settingTime / 86400);
  const displayHour = Math.floor((settingTime - displayDay * 86400) / 3600);
  const displayMinute = Math.floor((settingTime - (displayDay * 86400 + displayHour * 3600)) / 60);
  const displaySecond =
    settingTime - (displayDay * 86400 + displayHour * 3600 + displayMinute * 60);

  if (isRunning === true && days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
  }

  return (
    <>
      <DisplayTime
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        selectLanguage={selectLanguage}
      />
      <HStack justifyContent={"center"}>
        {selectLanguage === "English" ? (
          <>
            <Text textAlign={"center"}>【{isRunning ? "Running" : "Not running"}】</Text>
            <Text textAlign={"center"}>
              Setting Time：{displayDay}d {displayHour}h {displayMinute}m {displaySecond}s
            </Text>
          </>
        ) : (
          <>
            <Text textAlign={"center"}>【{isRunning ? "動作中" : "停止中"}】</Text>
            <Text textAlign={"center"}>
              設定時間：{displayDay}日 {displayHour}時 {displayMinute}分 {displaySecond}秒
            </Text>
          </>
        )}
      </HStack>
      <HStack justifyContent={"center"}>
        <ActionSelectButton
          start={start}
          pause={pause}
          resume={resume}
          restart={restart}
          settingTime={settingTime}
          setSettingTime={setSettingTime}
          selectLanguage={selectLanguage}
          setIsRunning={setIsRunning}
        ></ActionSelectButton>
        <SettingTime setSettingTime={setSettingTime} />
        <MenuFunction setSelectLanguage={setSelectLanguage} />
      </HStack>
    </>
  );
};
export default Timer;
