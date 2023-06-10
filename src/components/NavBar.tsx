import { Link } from 'react-router-dom';

import { AbsoluteCenter, Box, Button, Center, Text } from '@chakra-ui/react';

export const NavBar = () => (
  <Box bg="blue.100" width="100%" h="100vh">
    <Center bg="tomato" h="120px" color="white">
      <Text fontSize={['14px', '25px', '30px', '50']}>
        DayCare Managment System
      </Text>
    </Center>
    <AbsoluteCenter
      borderRadius="50%"
      bg="tomato"
      p="4"
      color="white"
      axis="both"
    >
      <Link to="home">
        <Button borderRadius="50%" colorScheme="teal" h={200} w={200}>
          Button
        </Button>
      </Link>
    </AbsoluteCenter>
  </Box>
);
