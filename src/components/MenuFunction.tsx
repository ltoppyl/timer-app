import React, { ChangeEvent, useState } from "react";
import {
  IconButton,
  MenuButton,
  MenuItem,
  Menu,
  MenuList,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

const MenuFunction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const selectLanguage = useSelector((state: RootStateOrAny) => state.language);
  const dispatch = useDispatch();
  let _selectLanguage = "Japanese";

  const RadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    _selectLanguage = e.target.value;
  };

  const textEnglish = ["Language", "Please enter the language", "Cancel", "Enter"];
  const textJapanese = ["言語", "言語を選択して下さい", "キャンセル", "決定"];
  let text = ["", "", "", ""];

  if (selectLanguage === "English") {
    text = textEnglish;
  } else if (selectLanguage === "Japanese") {
    text = textJapanese;
  }

  const changeLanguage = () => {
    if (_selectLanguage === "Japanese") {
      dispatch({ type: "TO_JAPANESE" });
    } else {
      dispatch({ type: "TO_ENGLISH" });
    }
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="ghost"
        colorScheme="ghost"
        _focus={{ boxShadow: "none" }}
      />
      <MenuList>
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
                <RadioGroup defaultValue="Japanese">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="blue" value="Japanese" onChange={(e) => RadioChange(e)}>
                      日本語
                    </Radio>
                    <Radio colorScheme="blue" value="English" onChange={(e) => RadioChange(e)}>
                      English
                    </Radio>
                  </Stack>
                </RadioGroup>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={onClose}>{text[2]}</Button>
                <Button
                  ml={3}
                  colorScheme="blue"
                  onClick={() => {
                    changeLanguage();
                    onClose();
                  }}
                >
                  {text[3]}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </MenuList>
    </Menu>
  );
};

export default MenuFunction;
