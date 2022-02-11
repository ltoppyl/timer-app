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
  HStack,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

type Props = {
  setSettingTime: Dispatch<SetStateAction<number>>;
  selectLanguage: string;
};

const SettingTime = ({ setSettingTime, selectLanguage }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const [inputTimeValueDay, setInputTimeValueDay] = useState<number>(0);
  const [inputTimeValueHour, setInputTimeValueHour] = useState<number>(0);
  const [inputTimeValueMinute, setInputTimeValueMinute] = useState<number>(0);
  const [inputTimeValueSecond, setInputTimeValueSecond] = useState<number>(0);

  const inputAnyTime = () => {
    const inputTimeValue =
      86400 * inputTimeValueDay +
      3600 * inputTimeValueHour +
      60 * inputTimeValueMinute +
      inputTimeValueSecond;
    setSettingTime(inputTimeValue);
    onClose();
  };

  const handleChangeInputDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTimeValueDay(Number(event.target.value));
  };
  const handleChangeInputHour = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTimeValueHour(Number(event.target.value));
  };
  const handleChangeInputMinute = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTimeValueMinute(Number(event.target.value));
  };
  const handleChangeInputSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTimeValueSecond(Number(event.target.value));
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
        {" "}
        <MenuItem
          onClick={() => {
            setSettingTime(1);
          }}
        >
          0:01
        </MenuItem>
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
        {selectLanguage === "English" ? (
          <MenuItem
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Any Time
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              setIsOpen(true);
            }}
          >
            任意の時間
          </MenuItem>
        )}
        <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={undefined}>
          {selectLanguage === "English" ? (
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Please enter any time
                </AlertDialogHeader>
                <AlertDialogBody>
                  <HStack>
                    <Input placeholder="day" onChange={handleChangeInputDay} />
                    <Input placeholder="hour" onChange={handleChangeInputHour} />
                    <Input placeholder="minute" onChange={handleChangeInputMinute} />
                    <Input placeholder="second" onChange={handleChangeInputSecond} />
                  </HStack>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button colorScheme="blue" onClick={inputAnyTime} ml={3}>
                    ENTER
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          ) : (
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  任意の時間を入力してください
                </AlertDialogHeader>
                <AlertDialogBody>
                  <HStack>
                    <Input placeholder="day" onChange={handleChangeInputDay} />
                    <Input placeholder="hour" onChange={handleChangeInputHour} />
                    <Input placeholder="minute" onChange={handleChangeInputMinute} />
                    <Input placeholder="second" onChange={handleChangeInputSecond} />
                  </HStack>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button colorScheme="blue" onClick={inputAnyTime} ml={3}>
                    決定
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          )}
        </AlertDialog>
      </MenuList>
    </Menu>
  );
};

export default SettingTime;
