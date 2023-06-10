import React from 'react';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

import { dummyClassrooms } from '../dummyData/classrooms';

export const Classes = () => {
  const dummyClassroomData = dummyClassrooms;

  return (
    <Box
      overflow="scroll"
      mr={10}
      ml={10}
      bg="pink"
      w="100%"
      maxH="90vh"
      h="90vh"
    >
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
                      Age Range: {classroom.startAge} year to {classroom.endAge}
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
  );
};
