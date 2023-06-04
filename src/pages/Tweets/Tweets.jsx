import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFirstUsers } from 'store/tweets/tweetsOperations';
import { Box, Flex } from '@chakra-ui/react';
import { colorBrandLight } from 'common/styles';

import UserList from 'components/UserList/UserList';
import BackBtn from 'components/BackBtn/BackBtn';
import LoadMore from 'components/LoadMore/LoadMore';
import Filter from 'components/Filter/Filter';

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFirstUsers());
  }, [dispatch]);

  return (
    <Box bg={colorBrandLight} minH="94.6vh">
      <Box maxW="1256px" mx="auto" py="24px" px="34px" textAlign="center">
        <Flex justify="space-between" gap="24px" mb="24px">
          <BackBtn />
          <Filter />
        </Flex>
        <UserList />
        <LoadMore />
      </Box>
    </Box>
  );
};

export default Tweets;
