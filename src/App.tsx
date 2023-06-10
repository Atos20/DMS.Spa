import axios from 'axios';
import { useEffect, useState } from 'react';

import { Box, Center, Container, Flex, Text } from '@chakra-ui/react';

import { NavBar } from './components/NavBar';
import ThemeToggleButton from './components/ThemeToggleButton';
import { Home } from './pages/Home';

export interface School {
  schoolId: number;
  schoolName: string;
  directorName: string;
}

const App = (): JSX.Element => {
  const [schools, setSchools] = useState<School[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://localhost:7136/api/School')
      .then((response) => {
        setSchools(response.data as unknown as School[]);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.warn(error);
      });
  }, []);

  return (
    <Box p={20} pt={0} h="100%">
      <Container maxW="container.xl" p={0} bg="gray.300" h="100%">
        <NavBar />
        <Flex h="100%" py={20}>
          <Home schools={schools} />
        </Flex>
      </Container>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
};

export default App;
