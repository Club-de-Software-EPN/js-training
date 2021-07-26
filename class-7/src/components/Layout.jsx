import React from 'react';
import { VStack } from '@chakra-ui/react';

import NavBar from './NavBar';

const Layout = ({ children }) => {
  return(
    <VStack w="100%" p={[5, 4, 6, 7]}>
      <NavBar />
      {children}
    </VStack>
  );
}

export default Layout;