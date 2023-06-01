import { NavLink as MenuLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';
import { linkStyles } from 'common/styleConstants';

const AppBar = () => {
  return (
    <nav>
      <Flex gap="16px">
        <Link as={MenuLink} to="/" sx={linkStyles}>
          Home
        </Link>

        <Link as={MenuLink} to="/tweets" sx={linkStyles}>
          Tweets
        </Link>
      </Flex>
    </nav>
  );
};

export default AppBar;
