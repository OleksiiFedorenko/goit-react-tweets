import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFirstUsers, fetchMoreUsers } from 'store/tweets/tweetsOperations';
import { selectPage, selectIsLoading } from 'store/tweets/tweetsSelectors';
import { Box, Button, useToast } from '@chakra-ui/react';
import { btnStyles, colorBrandLight } from 'common/styles';

import UserList from 'components/UserList/UserList';

const Tweets = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const toast = useToast();
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    dispatch(fetchFirstUsers());
  }, [dispatch]);

  const handleClick = async () => {
    const res = await dispatch(fetchMoreUsers(page)).unwrap();
    if (res.length < 3) {
      toast({
        title: "You've reached the limit.",
        status: 'warning',
        variant: 'subtle',
        position: 'top',
        isClosable: true,
      });
      setLimitReached(true);
    }
  };

  return (
    <Box bg={colorBrandLight} minH="94.6vh">
      <Box maxW="1256px" mx="auto" py="24px" px="34px" textAlign="center">
        <UserList />
        {!limitReached && (
          <Button
            onClick={handleClick}
            isLoading={isLoading}
            mt="24px"
            className="load-more"
            sx={btnStyles}
          >
            Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Tweets;
