import React from 'react';

import { Box, Center, Text } from '@chakra-ui/react';

export const NavBar = () => (
  <Box bg="blue.300" width="100%">
    <Center bg="tomato" h="120px" color="white">
      <Text fontSize={['14px', '25px', '30px', '50']}>
        DayCare Managment System
      </Text>
    </Center>
  </Box>
);
