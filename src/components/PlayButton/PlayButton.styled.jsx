import styled from '@emotion/styled';
import { AiFillPlayCircle } from 'react-icons/ai';

const setBackgroundImage = props => {
  if (!props.disabled) {
    return 'linear-gradient(0deg, rgb(30 77 116) 49%, rgb(0 241 253 / 45%) 100%)';
  }
  return 'linear-gradient(0deg, rgba(87,87,87,1) 2%, rgba(187,187,187,1) 100%)';
};

const setHover = props => {
  if (!props.disabled) {
    return 'linear-gradient(0deg, rgb(141 17 57) 49%, rgb(219 117 164 / 45%) 100%)';
  }
  return null;
};

const setColorIcon = props => {
  if (!props.disabled) {
    return 'white';
  }
  return `rgba(187,187,187,1)`;
};

export const StyledButton = styled.button`
  /* width: 100px; */
  /* height: 30px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  padding: 7px;
  border: 0px;
  border-radius: 4px;
  background-image: ${setBackgroundImage};
  border-radius: 50%;

  cursor: pointer;
  &:hover,
  &:focus {
    background-image: ${setHover};
  }
`;

export const PlayIcon = styled(AiFillPlayCircle)`
  color: ${setColorIcon};
  font-size: 20px;
  /* &:hover,
  &:focus {
    color: ${setHover};
  } */
`;
