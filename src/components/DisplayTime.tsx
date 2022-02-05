import { HStack } from "@chakra-ui/react";
import React from "react";
import CommonDisplayTime from "./CommonDisplayTime";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const DisplayTime = ({ days, hours, minutes, seconds }: Props) => {
  let upperLimitUnits = "";

  if (days === 0 && hours === 0 && minutes === 0) {
    upperLimitUnits = "second";
  }

  if (days === 0 && hours === 0 && minutes !== 0) {
    upperLimitUnits = "minute";
  }

  if (days === 0 && hours !== 0) {
    upperLimitUnits = "hour";
  }

  if (days !== 0) {
    upperLimitUnits = "day";
  }

  return (
    <HStack justifyContent={"center"}>
      {upperLimitUnits === "day" && (
        <HStack justifyContent={"center"}>
          <CommonDisplayTime units={days} unitsText={"d"} />
          <CommonDisplayTime units={hours} unitsText={"h"} />
          <CommonDisplayTime units={minutes} unitsText={"m"} />
          <CommonDisplayTime units={seconds} unitsText={"s"} />
        </HStack>
      )}
      {upperLimitUnits === "hour" && (
        <HStack justifyContent={"center"}>
          <CommonDisplayTime units={hours} unitsText={"h"} />
          <CommonDisplayTime units={minutes} unitsText={"m"} />
          <CommonDisplayTime units={seconds} unitsText={"s"} />
        </HStack>
      )}
      {upperLimitUnits === "minute" && (
        <HStack justifyContent={"center"}>
          <CommonDisplayTime units={minutes} unitsText={"m"} />
          <CommonDisplayTime units={seconds} unitsText={"s"} />
        </HStack>
      )}
      {upperLimitUnits === "second" && (
        <HStack justifyContent={"center"}>
          <CommonDisplayTime units={seconds} unitsText={"s"} />
        </HStack>
      )}
    </HStack>
  );
};

export default DisplayTime;
