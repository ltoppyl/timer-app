import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

type Props = {
  day: number;
  hour: number;
  minute: number;
  second: number;
  isRunning: boolean;
  upperLimitUnits: string;
};

const DisplaySettingTime = ({ day, hour, minute, second, isRunning, upperLimitUnits }: Props) => {
  const displayIsRunningEnglish = ["Setting Time", "Running", "Not Running"];
  const displayIsRunningJapanese = ["設定時間", "動作中", "停止中"];
  let displayIsRunning = ["", ""];
  const selectLanguage = useSelector((state: RootStateOrAny) => state.language);
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
      <div className="isRunning">
        <Text textAlign={"center"}>
          【{isRunning ? displayIsRunning[1] : displayIsRunning[2]}】
        </Text>
      </div>
      <div className="setting-time">
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
      </div>
    </HStack>
  );
};

export default DisplaySettingTime;
