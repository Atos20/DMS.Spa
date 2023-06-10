import { useEffect, useState } from 'react';

import { Box, Container, Flex } from '@chakra-ui/react';

import { NavBar } from './components/NavBar';
import ThemeToggleButton from './components/ThemeToggleButton';
import { REQUEST_METHOD, useAxios } from './hooks/useAxios';
import { Classroom } from './interfaces/classRoom';
import { School } from './interfaces/school';
import { Classes } from './pages/Classes';
import { Home } from './pages/Home';
import { GET_ALL_SCHOOLS } from './routes/routes';

const App = (): JSX.Element => {
  const [schools, setSchools] = useState<School[]>([]);
  const [classes, setClasses] = useState<Classroom[]>([]);
  const [schoolId, setSchoolId] = useState<number | null>(null);
  const [currentSchool, setCurrentSchool] = useState<School>();

  const {
    getResponse: getSchoolsData,
    response,
    loading,
  } = useAxios({
    method: REQUEST_METHOD.GET,
    url: GET_ALL_SCHOOLS,
  });

  useEffect(() => {
    getSchoolsData();
  }, []);

  useEffect(() => {
    if (response) {
      setSchools(response?.data as unknown as School[]);
    }
  }, [response]);

  const handleSchoolChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const schoolId = event.currentTarget.id;
    const parsedNumber = parseInt(schoolId, 10);
    setSchoolId(parsedNumber);
  };

  return (
    <Box p={20} pt={0} h="100%">
      <Container maxW="container.xl" p={0} bg="gray.300" h="80%h">
        <NavBar />
        <Flex h="100%" py={0}>
          <Home schools={schools} handleSchoolChange={handleSchoolChange} />
        </Flex>
      </Container>

      <Container maxW="container.xl" p={0} bg="blue.300" h="80%h">
        <NavBar />
        <Flex h="100%" py={0}>
          <Classes />
        </Flex>
      </Container>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
};

export default App;
