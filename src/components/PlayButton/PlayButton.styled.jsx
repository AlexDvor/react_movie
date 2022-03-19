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
    return 'linear-gradient(to right top, #780000, #890409, #9c0810, #ae0d17, #c1121f);';
  }
  return null;
};

const setColorIcon = props => {
  if (!props.disabled) {
    return 'black';
  }
  return `rgba(187,187,187,1)`;
};

const setColor = props => {
  if (!props.disabled) {
    return 'white';
  }
  return 'null';
};

export const StyledButton = styled.button`
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

  @media screen and (min-width: 767px) {
    width: 150px;
    padding: 15px;
    background: white;
    color: black;
    font-weight: bold;
    margin-left: 10px;
    border-radius: 5px;
  }

  cursor: pointer;
  &:hover,
  &:focus {
    background-image: ${setHover};
    color: ${setColor};
    svg {
      color: ${setColor};
    }
  }
`;

export const PlayIcon = styled(AiFillPlayCircle)`
  color: ${setColorIcon};
  font-size: 20px;
  margin-right: 8px;
  /* &:hover,
  &:focus {
    color: ${setHover};
  } */
`;
