import React from "react";
import { HStack, Text } from "@chakra-ui/react";

type Props = {
  units: number;
  unitsText: string;
};

const CommonDisplayTime = ({ units, unitsText }: Props) => {
  return (
    <HStack>
      <div className="display-time">
        <Text fontSize={100}>{units}</Text>
        <Text alignSelf={"flex-end"} fontSize={70}>
          {unitsText}
        </Text>
      </div>
    </HStack>
  );
};

export default CommonDisplayTime;
