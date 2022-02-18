import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
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

type Props = {
  selectLanguage: string;
  setSelectLanguage: Dispatch<SetStateAction<string>>;
};

const MenuFunction = ({ selectLanguage, setSelectLanguage }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
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
                    setSelectLanguage(_selectLanguage);
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
