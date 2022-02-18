import { HStack } from "@chakra-ui/react";
import React from "react";
import CommonDisplayTime from "./CommonDisplayTime";
import useJudgeUpperLimitUnits from "../hooks/useJudgeUpperLimitUnits";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  selectLanguage: string;
};

const DisplayTime = ({ days, hours, minutes, seconds, selectLanguage }: Props) => {
  let upperLimitUnits = useJudgeUpperLimitUnits(days, hours, minutes);
  const unitsEnglish = ["d", "h", "m", "s"];
  const unitsJapanese = ["日", "時", "分", "秒"];
  let units = ["", "", "", ""];

  if (selectLanguage === "English") {
    units = unitsEnglish;
  } else if (selectLanguage === "Japanese") {
    units = unitsJapanese;
  }

  return (
    <HStack justifyContent={"center"}>
      <>
        {upperLimitUnits.upperLimitUnits === "day" && (
          <HStack justifyContent={"center"}>
            <CommonDisplayTime units={days} unitsText={units[0]} />
            <CommonDisplayTime units={hours} unitsText={units[1]} />
            <CommonDisplayTime units={minutes} unitsText={units[2]} />
            <CommonDisplayTime units={seconds} unitsText={units[3]} />
          </HStack>
        )}
        {upperLimitUnits.upperLimitUnits === "hour" && (
          <HStack justifyContent={"center"}>
            <CommonDisplayTime units={hours} unitsText={units[1]} />
            <CommonDisplayTime units={minutes} unitsText={units[2]} />
            <CommonDisplayTime units={seconds} unitsText={units[3]} />
          </HStack>
        )}
        {upperLimitUnits.upperLimitUnits === "minute" && (
          <HStack justifyContent={"center"}>
            <CommonDisplayTime units={minutes} unitsText={units[2]} />
            <CommonDisplayTime units={seconds} unitsText={units[3]} />
          </HStack>
        )}
        {upperLimitUnits.upperLimitUnits === "second" && (
          <HStack justifyContent={"center"}>
            <CommonDisplayTime units={seconds} unitsText={units[3]} />
          </HStack>
        )}
      </>
    </HStack>
  );
};

export default DisplayTime;
