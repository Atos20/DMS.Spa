import axios from 'axios';
import { useEffect, useState } from 'react';

import {
  AbsoluteCenter,
  Box,
  Container,
  Flex,
  Heading,
  Spinner,
  VStack,
} from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';

interface Schools {
  school: number;
  schoolName: string;
  directorName: string;
}

const App = (): JSX.Element => {
  const [schools, setSchools] = useState<Schools[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://localhost:7136/api/School')
      .then((response) => {
        setSchools(response.data as unknown as Schools[]);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.warn(error);
      });
  }, []);

  return (
    <Box>
      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={20} />
      </Container>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
};

export default App;
