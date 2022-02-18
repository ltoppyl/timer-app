import { HStack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  day: number;
  hour: number;
  minute: number;
  second: number;
  isRunning: boolean;
  selectLanguage: string;
  upperLimitUnits: string;
};

const DisplaySettingTime = ({
  day,
  hour,
  minute,
  second,
  isRunning,
  selectLanguage,
  upperLimitUnits,
}: Props) => {
  const displayIsRunningEnglish = ["Setting Time", "Running", "Not Running"];
  const displayIsRunningJapanese = ["設定時間", "動作中", "停止中"];
  let displayIsRunning = ["", ""];
  const displayUnitsEnglish = ["d", "h", "m", "s"];
  const displayUnitsJapanese = ["日", "時", "分", "秒"];
  let displayUnite = ["", "", "", ""];

  if (selectLanguage === "English") {
    displayIsRunning = displayIsRunningEnglish;
    displayUnite = displayUnitsEnglish;
  } else if (selectLanguage === "Japanese") {
    displayIsRunning = displayIsRunningJapanese;
    displayUnite = displayUnitsJapanese;
  }

  return (
    <HStack justifyContent={"center"}>
      <Text textAlign={"center"}>【{isRunning ? displayIsRunning[1] : displayIsRunning[2]}】</Text>
      {upperLimitUnits === "day" && (
        <Text textAlign={"center"}>
          {displayIsRunning[0]}：{day}
          {displayUnite[0]} {hour}
          {displayUnite[1]} {minute}
          {displayUnite[2]} {second}
          {displayUnite[3]}
        </Text>
      )}
      {upperLimitUnits === "hour" && (
        <Text textAlign={"center"}>
          {displayIsRunning[0]}： {hour}
          {displayUnite[1]} {minute}
          {displayUnite[2]} {second}
          {displayUnite[3]}
        </Text>
      )}
      {upperLimitUnits === "minute" && (
        <Text textAlign={"center"}>
          {displayIsRunning[0]}： {minute}
          {displayUnite[2]} {second}
          {displayUnite[3]}
        </Text>
      )}
      {upperLimitUnits === "second" && (
        <Text textAlign={"center"}>
          {displayIsRunning[0]}：{second}
          {displayUnite[3]}
        </Text>
      )}
    </HStack>
  );
};

export default DisplaySettingTime;
