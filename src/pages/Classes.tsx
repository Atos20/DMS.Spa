import { FC, useEffect, useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

import { dummyClassrooms } from '../dummyData/classrooms';
import { REQUEST_METHOD, useAxios } from '../hooks/useAxios';
import { Classroom } from '../interfaces/classRoom';
import { GET_SCHOOL_CLASSROOMS, handleIdSelection } from '../routes/routes';

interface ClassesProps {
  schoolId?: number | null;
}

export const Classes: FC<ClassesProps> = ({ schoolId, ...props }) => {
  const [classes, setClasses] = useState<Classroom[]>([]);

  const {
    getResponse: getClassesData,
    response,
    loading,
  } = useAxios({
    method: REQUEST_METHOD.GET,
    url: handleIdSelection(GET_SCHOOL_CLASSROOMS, schoolId?.toString()),
  });

  useEffect(() => {
    if (schoolId) {
      getClassesData();
    }
  }, [schoolId]);

  useEffect(() => {
    if (response) {
      setClasses(response.data as unknown as Classroom[]);
    }
  }, [response]);

  // dymmyData
  const dummyClassroomData = dummyClassrooms;

  return (
    <Container maxW="container.xl" p={0} bg="blue.300" h="80%h">
      <Box overflow="scroll" mr={10} ml={10} bg="pink" maxH="90vh" h="90vh">
        <Text p={2} fontSize="2xl">
          Classrooms List
        </Text>
        {dummyClassroomData && dummyClassroomData.length > 0 ? (
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <Box h={200} bg="red.300">
              {dummyClassroomData.map((classroom) => (
                <Card
                  key={classroom.classRoomId}
                  direction={{ base: 'column', sm: 'row' }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '200px' }}
                    // eslint-disable-next-line max-len
                    src={`../../src/assets/schools/${classroom.classRoomId}.jpeg`}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody>
                      <Heading size="md">
                        Classroom Name: {classroom.classRoomName}
                      </Heading>

                      <Text py="1">Class nickname: {classroom.courseName}</Text>
                      <Text py="0.5">
                        Teacher Name: {classroom.childCareWorker}
                      </Text>
                      <Text py="0">
                        Age Range: {classroom.startAge} year to{' '}
                        {classroom.endAge}
                        years
                      </Text>
                      <Text py="0">
                        Children Limit: {classroom.childrenLimit}
                        years
                      </Text>
                    </CardBody>

                    <CardFooter>
                      <Button
                        id={classroom.classRoomId.toString()}
                        variant="solid"
                        colorScheme="blue"
                      >
                        Select
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              ))}
            </Box>
          </VStack>
        ) : (
          <div />
        )}
      </Box>
    </Container>
  );
};

Classes.defaultProps = {
  schoolId: null,
};
