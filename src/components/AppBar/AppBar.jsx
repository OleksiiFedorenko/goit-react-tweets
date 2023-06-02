import { NavLink as MenuLink } from 'react-router-dom';
import { Center, Flex, Link } from '@chakra-ui/react';
import { linkStyles } from 'common/styleConstants';

const AppBar = () => {
  return (
    <Center as="nav" h="50px" px="20px" bg="#471CA9">
      <Flex align="center" gap="24px" maxW="820px" flex="1">
        <Link as={MenuLink} to="/" sx={linkStyles}>
          Home
        </Link>

        <Link as={MenuLink} to="/tweets" sx={linkStyles}>
          Tweets
        </Link>
      </Flex>
    </Center>
  );
};

export default AppBar;
