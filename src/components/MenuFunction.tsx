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
  setSelectLanguage: Dispatch<SetStateAction<string>>;
};

const MenuFunction = ({ setSelectLanguage }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  let _selectLanguage = "";

  const RadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    _selectLanguage = e.target.value;
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
          言語
        </MenuItem>
        <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={undefined}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                言語を選択して下さい
              </AlertDialogHeader>
              <AlertDialogBody>
                <RadioGroup>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="red" value="Japanese" onChange={(e) => RadioChange(e)}>
                      日本語
                    </Radio>
                    <Radio colorScheme="blue" value="English" onChange={(e) => RadioChange(e)}>
                      English
                    </Radio>
                  </Stack>
                </RadioGroup>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                  ml={3}
                  colorScheme="blue"
                  onClick={() => {
                    console.log("Enter");
                    setSelectLanguage(_selectLanguage);
                    onClose();
                  }}
                >
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

export default MenuFunction;
