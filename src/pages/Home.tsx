import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
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
  handleSchoolChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Home: FC<HomeProps> = ({
  schools,
  handleSchoolChange,
  ...props
}) => {
  const SKELETON_COUNT = Array.from({ length: 6 }, (_, index) => index + 1);
  // for dummy purpose
  const dummyData = schoolsDumyData;
  return (
    <Container
      maxW="container.xl"
      p={0}
      bg="gray.300"
      h="80%"
      data-testid="school-container"
    >
      <Box overflow="scroll" mr={10} ml={10} bg="pink" maxH="90vh">
        <Text p={0} fontSize="2xl">
          School List
        </Text>
        {dummyData && dummyData?.length > 0 ? (
          <SimpleGrid minChildWidth="300px" spacingX="20px" spacingY="20px">
            {dummyData.map((daycare) => (
              <Box
                key={daycare.schoolId}
                bg="tomato"
                h={400}
                w={300}
                test-id="school-container"
              >
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
                      <Link to={`classes/${daycare.schoolId}`}>
                        <Button
                          id={daycare.schoolId.toString()}
                          variant="solid"
                          colorScheme="blue"
                          onClick={handleSchoolChange}
                        >
                          Select
                        </Button>
                      </Link>
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
    </Container>
  );
};

Home.defaultProps = {
  schools: [],
};
