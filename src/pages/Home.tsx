import { FC } from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react';

import { School } from '../App';
import { schoolsDumyData } from '../dummyData/schoolsData';

interface HomeProps {
  schools?: School[];
}

export const Home: FC<HomeProps> = ({ schools, ...props }) => {
  const SKELETON_COUNT = Array.from({ length: 6 }, (_, index) => index + 1);
  // for dummy purpose
  // const dummyData = schoolsDumyData;
  return (
    <Box mr={10} ml={10} bg="pink" w="100%">
      <Text p={10} fontSize="2xl">
        School List
      </Text>
      {schools && schools?.length > 0 ? (
        <SimpleGrid minChildWidth="300px" spacingX="20px" spacingY="20px">
          {schools?.map((daycare) => (
            <Box key={daycare.schoolId} bg="tomato" h={400} w={300}>
              <Card h="100%" maxW="sm">
                <CardBody>
                  <Image
                    src={`../../src/assets/schools/${daycare.schoolId}.jpeg`}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="2">
                    <Heading size="md">{daycare.schoolName}</Heading>
                    <Text color="blue.600" fontSize="1xl">
                      {daycare.directorName}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Select
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid minChildWidth="250px" spacingX="40px" spacingY="20px">
          <>
            {SKELETON_COUNT.map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={i} padding="6" boxShadow="lg" bg="white">
                <Skeleton height="150px" />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
            ))}
          </>
        </SimpleGrid>
      )}
    </Box>
  );
};

Home.defaultProps = {
  schools: [],
};