import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useTimer } from "react-timer-hook";

type Props = {
  expiryTimestamp: Date;
};

const Timer = ({ expiryTimestamp }: Props) => {
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <HStack justifyContent={"center"}>
        <Button colorScheme="black" variant="outline" onClick={start}>
          Start
        </Button>
        <Button colorScheme="black" variant="outline" onClick={pause}>
          Pause
        </Button>
        <Button colorScheme="black" variant="outline" onClick={resume}>
          Resume
        </Button>
        <Button
          colorScheme="black"
          variant="outline"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        >
          Restart
        </Button>
      </HStack>
    </div>
  );
};
export default Timer;
