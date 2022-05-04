import React from "react";
import { HStack, Text } from "@chakra-ui/react";

type Props = {
  units: number;
  unitsText: string;
};

const CommonDisplayTime = ({ units, unitsText }: Props) => {
  return (
    <div className="display-time">
      <HStack>
        <Text fontSize={100}>{units}</Text>
        <Text alignSelf={"flex-end"} fontSize={70}>
          {unitsText}
        </Text>
      </HStack>
    </div>
  );
};

export default CommonDisplayTime;
