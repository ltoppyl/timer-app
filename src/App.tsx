import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <Container maxW="container.sm">
      <Box pt={12} pb={9} bg="blue.100">
        <Text fontFamily="Bold" fontSize={36} textAlign={"center"}>
          10:00
        </Text>
      </Box>
    </Container>
  );
}

export default App;
