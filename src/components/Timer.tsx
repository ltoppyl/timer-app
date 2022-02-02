import React from "react";
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
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <ActionSelectButton expiryTimestamp={expiryTimestamp}></ActionSelectButton>
    </div>
  );
};
export default Timer;
