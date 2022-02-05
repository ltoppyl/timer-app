import React, { useState } from "react";
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

const MenuFunction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

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
                    <Radio colorScheme="red" value="1">
                      日本語
                    </Radio>
                    <Radio colorScheme="blue" value="2">
                      English
                    </Radio>
                  </Stack>
                </RadioGroup>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button colorScheme="blue" onClick={onClose} ml={3}>
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
