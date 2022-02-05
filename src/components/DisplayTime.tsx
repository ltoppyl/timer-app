import { HStack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const DisplayTime = ({ days, hours, minutes, seconds }: Props) => {
  console.log("d:", days);
  console.log("h:", hours);
  console.log("m:", minutes);
  console.log("s:", seconds);
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
  console.log("単位上限: ", upperLimitUnits);

  return (
    <HStack justifyContent={"center"}>
      {upperLimitUnits === "day" && (
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
      )}
      {upperLimitUnits === "hour" && (
        <HStack justifyContent={"center"}>
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
      )}
      {upperLimitUnits === "minute" && (
        <HStack justifyContent={"center"}>
          <Text fontSize={100}>{minutes}</Text>
          <Text alignSelf={"flex-end"} fontSize={70}>
            m
          </Text>
          <Text fontSize={100}>{seconds}</Text>
          <Text alignSelf={"flex-end"} fontSize={70}>
            s
          </Text>
        </HStack>
      )}
      {upperLimitUnits === "second" && (
        <HStack justifyContent={"center"}>
          <Text fontSize={100}>{seconds}</Text>
          <Text alignSelf={"flex-end"} fontSize={70}>
            s
          </Text>
        </HStack>
      )}
    </HStack>
  );
};

export default DisplayTime;
