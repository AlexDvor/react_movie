import styled from '@emotion/styled';
import { AiFillPlayCircle } from 'react-icons/ai';

type DisabledProps = {
  disabled: boolean;
};

const setBackgroundImage = (props: DisabledProps): string | null => {
  if (!props.disabled) {
    return 'linear-gradient(to right top, #780000, #890409, #9c0810, #ae0d17, #c1121f);';
  }
  return null;
};

const setColor = (props: DisabledProps): string | null => {
  if (!props.disabled) {
    return 'white';
  }
  return null;
};

const setFontSize = (props: DisabledProps): string => {
  if (!props.disabled) {
    return '12px';
  }
  return '8px';
};

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${setFontSize};
  border: 0px;
  width: 100px;
  padding: 7px;
  background: white;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 150px;
    padding: 15px;
    font-size: 12px;
  }

  &:hover,
  &:focus {
    background-image: ${setBackgroundImage};
    color: ${setColor};
    svg {
      color: ${setColor};
    }
  }
`;

export const PlayIcon = styled(AiFillPlayCircle)<DisabledProps>`
  font-size: 20px;
  margin-right: 8px;
`;
