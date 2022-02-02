import React from "react";
import { Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import ActionSelectButton from "./ActionSelectButton";

type Props = {
  expiryTimestamp: Date;
};

const Timer = ({ expiryTimestamp }: Props) => {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <>
      <Text textAlign={"center"} fontSize={100}>
        {days}:{hours}:{minutes}:{seconds}
      </Text>
      <Text textAlign={"center"}>{isRunning ? "Running" : "Not running"}</Text>
      <ActionSelectButton expiryTimestamp={expiryTimestamp}></ActionSelectButton>
    </>
  );
};
export default Timer;
