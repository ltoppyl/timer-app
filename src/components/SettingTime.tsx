import React, { Dispatch, SetStateAction, useState } from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Input,
  Button,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

type Props = { setSettingTime: Dispatch<SetStateAction<number>> };

const SettingTime = ({ setSettingTime }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const [inputTimeValue, setInputTimeValue] = useState<number>(0);

  const inputTime = () => {
    setSettingTime(inputTimeValue);
    onClose();
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTimeValue(Number(event.target.value));
  };

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
        <MenuItem
          onClick={() => {
            setIsOpen(true);
          }}
        >
          任意の時間
        </MenuItem>
        <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={undefined}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Input Time
              </AlertDialogHeader>
              <AlertDialogBody>
                <Input placeholder="Time" onChange={handleChangeInput} />
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button colorScheme="blue" onClick={inputTime} ml={3}>
                  ENTER
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </MenuList>
    </Menu>
  );
};

export default SettingTime;
