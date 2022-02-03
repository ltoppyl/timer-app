import React from "react";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

type Props = { setSettingTime: React.Dispatch<React.SetStateAction<number>> };

const SettingTime = ({ setSettingTime }: Props) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<TimeIcon />}
        variant="ghost"
        colorScheme="ghost"
        _focus={{ boxShadow: "none" }}
      />
      <MenuList>
        <MenuItem
          onClick={() => {
            setSettingTime(60);
          }}
        >
          1:00
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSettingTime(180);
          }}
        >
          3:00
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSettingTime(300);
          }}
        >
          5:00
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSettingTime(3600);
          }}
        >
          60:00
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SettingTime;
