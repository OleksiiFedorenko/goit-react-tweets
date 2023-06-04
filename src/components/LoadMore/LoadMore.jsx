import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreUsers } from 'store/tweets/tweetsOperations';
import { selectPage, selectIsLoading } from 'store/tweets/tweetsSelectors';
import { Button, useToast } from '@chakra-ui/react';
import { btnStyles } from 'common/styles';

const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const toast = useToast();
  const [limitReached, setLimitReached] = useState(false);

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

  if (limitReached) return null;

  return (
    <Button
      onClick={handleClick}
      isLoading={isLoading}
      mt="24px"
      className="load-more"
      sx={btnStyles}
    >
      Load More
    </Button>
  );
};

export default LoadMore;
