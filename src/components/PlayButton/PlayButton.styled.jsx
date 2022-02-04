import styled from '@emotion/styled';
import { AiFillPlayCircle } from 'react-icons/ai';

const setFontSize = props => {
  return !props.disabled ? `14px` : `12px`;
};

const setBackgroundImage = props => {
  if (!props.disabled) {
    return 'linear-gradient(0deg, rgba(64, 145, 108, 1) 49%, rgba(116, 198, 157, 1) 100%)';
  }
  return 'linear-gradient(0deg, rgba(87,87,87,1) 2%, rgba(187,187,187,1) 100%)';
};

const setHover = props => {
  if (!props.disabled) {
    return 'green';
  }
  return null;
};

const setColorIcon = props => {
  if (!props.disabled) {
    return '#9ac7fa';
  }
  return `rgba(187,187,187,1)`;
};

export const StyledButton = styled.button`
  /* width: 100px; */
  /* height: 30px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${setFontSize};
  color: white;
  /* padding: 5px; */
  border: 0px;
  border-radius: 4px;
  /* background-image: ${setBackgroundImage}; */
  background-color: transparent;

  cursor: pointer;
  /* &:hover,
  &:focus {
    background-image: ${setHover};
  } */
`;

export const PlayIcon = styled(AiFillPlayCircle)`
  color: ${setColorIcon};
  font-size: 26px;
  &:hover,
  &:focus {
    color: ${setHover};
  }
`;
