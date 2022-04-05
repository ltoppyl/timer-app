import React from "react";
import { Button, GridItem, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <VStack spacing={10}>
        <GridItem w="100%" h="10" bg="white" />
        <Button
          w="100%"
          colorScheme="black"
          variant="outline"
          onClick={() => {
            navigate("/countdown");
          }}
        >
          Countdown
        </Button>
        <Button
          w="100%"
          colorScheme="black"
          variant="outline"
          onClick={() => {
            navigate("/countup");
          }}
        >
          Countup
        </Button>
        <Button
          w="100%"
          colorScheme="black"
          variant="outline"
          onClick={() => {
            navigate("/time");
          }}
        >
          Time
        </Button>
      </VStack>
    </>
  );
};

export default Home;
