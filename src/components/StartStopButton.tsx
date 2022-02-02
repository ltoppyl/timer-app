import React from "react";
import { Button } from "@chakra-ui/react";

const StartButton = () => {
  return (
    <>
      <Button colorScheme="black" variant="outline">
        Start
      </Button>
      <Button colorScheme="black" variant="outline">
        Stop
      </Button>
    </>
  );
};

export default StartButton;
