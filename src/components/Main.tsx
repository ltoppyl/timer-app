import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import ActionSelectButton from "./ActionSelectButton";
import DisplayTime from "./DisplayTime";

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
  const displayDay = Math.floor(settingTime / 86400);
  const displayHour = Math.floor((settingTime - displayDay * 86400) / 3600);
  const displayMinute = Math.floor((settingTime - (displayDay * 86400 + displayHour * 3600)) / 60);
  const displaySecond =
    settingTime - (displayDay * 86400 + displayHour * 3600 + displayMinute * 60);

  return (
    <>
      <DisplayTime days={days} hours={hours} minutes={minutes} seconds={seconds} />
      {/* <HStack justifyContent={"center"}>
        <Text fontSize={100}>{days}</Text>
        <Text alignSelf={"flex-end"} fontSize={70}>
          d
        </Text>
        <Text fontSize={100}>{hours}</Text>
        <Text alignSelf={"flex-end"} fontSize={70}>
          h
        </Text>
        <Text fontSize={100}>{minutes}</Text>
        <Text alignSelf={"flex-end"} fontSize={70}>
          m
        </Text>
        <Text fontSize={100}>{seconds}</Text>
        <Text alignSelf={"flex-end"} fontSize={70}>
          s
        </Text>
      </HStack> */}
      <HStack justifyContent={"center"}>
        <Text textAlign={"center"}>【{isRunning ? "Running" : "Not running"}】</Text>
        <Text textAlign={"center"}>
          設定時間：{displayDay}d {displayHour}h {displayMinute}m {displaySecond}s
        </Text>
      </HStack>
      <ActionSelectButton
        start={start}
        pause={pause}
        resume={resume}
        restart={restart}
        settingTime={settingTime}
        setSettingTime={setSettingTime}
      ></ActionSelectButton>
    </>
  );
};
export default Timer;
