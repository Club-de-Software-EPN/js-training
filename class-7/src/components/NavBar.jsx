import React from 'react';
import { HStack, Image, Input, useColorMode } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack w="100%" justifyContent="space-between">
      <Image height="70px" src={colorMode === 'dark' ? 'https://www.club-software-epn.tech/logo.png' : 'https://www.club-software-epn.tech/logo-dark.png'}/>
      <Input variant="filled" size="lg" maxW="500px" placeholder="Search"/>
      <ColorModeSwitcher justifySelf="flex-end" />
    </HStack>
  );
}

export default NavBar;
