import { HStack } from "@chakra-ui/react";
import React from "react";
import CommonDisplayTime from "./CommonDisplayTime";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  selectLanguage: string;
};

const DisplayTime = ({ days, hours, minutes, seconds, selectLanguage }: Props) => {
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
      {selectLanguage === "English" ? (
        <>
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
        </>
      ) : (
        <>
          {upperLimitUnits === "day" && (
            <HStack justifyContent={"center"}>
              <CommonDisplayTime units={days} unitsText={"日"} />
              <CommonDisplayTime units={hours} unitsText={"時"} />
              <CommonDisplayTime units={minutes} unitsText={"分"} />
              <CommonDisplayTime units={seconds} unitsText={"秒"} />
            </HStack>
          )}
          {upperLimitUnits === "hour" && (
            <HStack justifyContent={"center"}>
              <CommonDisplayTime units={hours} unitsText={"時"} />
              <CommonDisplayTime units={minutes} unitsText={"分"} />
              <CommonDisplayTime units={seconds} unitsText={"秒"} />
            </HStack>
          )}
          {upperLimitUnits === "minute" && (
            <HStack justifyContent={"center"}>
              <CommonDisplayTime units={minutes} unitsText={"分"} />
              <CommonDisplayTime units={seconds} unitsText={"秒"} />
            </HStack>
          )}
          {upperLimitUnits === "second" && (
            <HStack justifyContent={"center"}>
              <CommonDisplayTime units={seconds} unitsText={"秒"} />
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};

export default DisplayTime;
