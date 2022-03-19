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
  Text,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { RootStateOrAny, useSelector } from "react-redux";

type Props = {
  setSettingTime: Dispatch<SetStateAction<number>>;
};

const SettingTime = ({ setSettingTime }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const selectLanguage = useSelector((state: RootStateOrAny) => state.language);
  const [inputTimeValueDay, setInputTimeValueDay] = useState<number>(0);
  const [inputTimeValueHour, setInputTimeValueHour] = useState<number>(0);
  const [inputTimeValueMinute, setInputTimeValueMinute] = useState<number>(0);
  const [inputTimeValueSecond, setInputTimeValueSecond] = useState<number>(0);
  const [inputValidation, setInputValidation] = useState<boolean>(true);

  const textEnglish = [
    "Any Time",
    "Please enter any time",
    "Enter",
    "Cancel",
    "※Please enter the value appropriately",
  ];
  const textJapanese = [
    "任意の時間",
    "任意の時間を入力してください",
    "決定",
    "キャンセル",
    "※数値を適切に入力してください",
  ];
  let text = ["", "", ""];
  if (selectLanguage === "English") {
    text = textEnglish;
  } else if (selectLanguage === "Japanese") {
    text = textJapanese;
  }

  const inputAnyTime = () => {
    const inputTimeValue =
      86400 * inputTimeValueDay +
      3600 * inputTimeValueHour +
      60 * inputTimeValueMinute +
      inputTimeValueSecond;
    setSettingTime(inputTimeValue);
    onClose();
  };

  const checkValidation = () => {
    if (
      inputTimeValueDay === 0 &&
      inputTimeValueHour === 0 &&
      inputTimeValueMinute === 0 &&
      inputTimeValueSecond === 0
    ) {
      setInputValidation(false);
    } else {
      setInputValidation(true);
      inputAnyTime();
    }
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

  const handleCancel = () => {
    setInputValidation(true);
    onClose();
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
            setSettingTime(300);
          }}
        >
          5:00
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSettingTime(600);
          }}
        >
          10:00
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
          {text[0]}
        </MenuItem>
        <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={undefined}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {text[1]}
              </AlertDialogHeader>
              <AlertDialogBody>
                {inputValidation === false && <Text color={"red"}>{text[4]}</Text>}
                <HStack>
                  <Input placeholder="day" onChange={handleChangeInputDay} />
                  <Input placeholder="hour" onChange={handleChangeInputHour} />
                  <Input placeholder="minute" onChange={handleChangeInputMinute} />
                  <Input placeholder="second" onChange={handleChangeInputSecond} />
                </HStack>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={handleCancel}>{text[3]}</Button>
                <Button colorScheme="blue" onClick={checkValidation} ml={3}>
                  {text[2]}
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
