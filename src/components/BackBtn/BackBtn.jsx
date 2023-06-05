import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilter } from 'store/filter/filterSlice';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { smBtnStyles } from 'common/styles';

const BackBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    dispatch(setFilter('all'));
  };

  return (
    <Button onClick={handleClick} leftIcon={<ArrowBackIcon />} sx={smBtnStyles}>
      Back
    </Button>
  );
};

export default BackBtn;
