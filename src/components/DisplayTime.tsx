import { HStack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const DisplayTime = ({ days, hours, minutes, seconds }: Props) => {
  return (
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
  );
};

export default DisplayTime;
