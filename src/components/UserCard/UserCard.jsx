import { useSelector } from 'react-redux';
import { selectFollowings } from 'store/tweets/tweetsSelectors';
import { numberWithCommas } from 'common/utils';
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Text,
  Center,
  Avatar,
} from '@chakra-ui/react';
import {
  cardStyles,
  btnStyles,
  txtStyles,
  logoStyles,
  lineStyles,
  circleStyles,
  avatarStyles,
} from 'common/styles';
import logo from 'images/goit-logo.png';
import bg from 'images/card-bg.png';
import line from 'images/avatar-line.png';
import circle from 'images/avatar-circle.png';

const UserCard = ({ userData }) => {
  const followings = useSelector(selectFollowings);
  const { id, user, avatar, tweets, followers } = userData;
  const isFollowing = followings.includes(id);

  return (
    <Card sx={cardStyles}>
      <Image src={logo} alt="GoIT logo" sx={logoStyles} />
      <Image src={line} alt="Card divider" sx={lineStyles} />
      <Image src={circle} alt="Avatar circle" sx={circleStyles} />
      <Avatar name={user} src={avatar} size="lg" sx={avatarStyles} />
      <CardBody p="0" mb="26px" textAlign="center">
        <Image src={bg} alt="Nice background" mb="88px" />
        <Text sx={txtStyles} mb="16px">
          {numberWithCommas(tweets)} tweets
        </Text>
        <Text sx={txtStyles}>{numberWithCommas(followers)} followers</Text>
      </CardBody>
      <CardFooter as={Center} p="0" textAlign="center">
        <Button className={isFollowing ? 'following' : ''} sx={btnStyles}>
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;