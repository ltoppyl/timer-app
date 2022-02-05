import React from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  units: number;
  unitsText: string;
};

const CommonDisplayTime = ({ units, unitsText }: Props) => {
  return (
    <>
      <Text fontSize={100}>{units}</Text>
      <Text alignSelf={"flex-end"} fontSize={70}>
        {unitsText}
      </Text>
    </>
  );
};

export default CommonDisplayTime;
