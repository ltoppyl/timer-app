import {
  Container,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

import Time from "./components/Time";
import StartStopButton from "./components/StartStopButton";
// import SettingTimer from "./components/SettingTime";
import { TimeIcon } from "@chakra-ui/icons";

function App() {
  return (
    <Container maxW="container.sm">
      <Time />
      <HStack justifyContent={"center"}>
        <StartStopButton />
        {/* <SettingTime /> */}
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<TimeIcon />}
            color="black"
            variant="outline"
            _focus={{ boxShadow: "none" }}
          />
          <MenuList>
            <MenuItem>1:00</MenuItem>
            <MenuItem>3:00</MenuItem>
            <MenuItem>5:00</MenuItem>
            <MenuItem>10:00</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Container>
  );
}

export default App;
