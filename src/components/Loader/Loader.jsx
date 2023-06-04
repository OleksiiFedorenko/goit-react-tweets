// import { Grid } from 'react-loader-spinner';
// import { Center } from '@chakra-ui/react';
import { SimpleGrid, Skeleton } from '@chakra-ui/react';
// import { colorBrandDark } from 'common/styles';

const Loader = () => {
  return (
    <SimpleGrid minChildWidth="380px" spacing="24px">
      <Skeleton w="380px" h="460px" />
      <Skeleton w="380px" h="460px" />
      <Skeleton w="380px" h="460px" />
    </SimpleGrid>
  );

  // return (
  //   <Center mt="24px">
  //     <Grid
  //       height="80"
  //       width="80"
  //       color={colorBrandDark}
  //       // color="#3186ce"
  //       ariaLabel="grid-loading"
  //       radius="12.5"
  //       wrapperStyle={{}}
  //       wrapperClass=""
  //       visible={true}
  //     />
  //   </Center>
  // );
};

export default Loader;
