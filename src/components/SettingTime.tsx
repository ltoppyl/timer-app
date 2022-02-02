import React from "react";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

const SettingTime = () => {
  return (
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
  );
};

export default SettingTime;
