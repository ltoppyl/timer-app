import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import ActionSelectButton from "./ActionSelectButton";

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

  return (
    <>
      <HStack justifyContent={"center"}>
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
      </HStack>
      <Text textAlign={"center"}>{isRunning ? "Running" : "Not running"}</Text>
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
