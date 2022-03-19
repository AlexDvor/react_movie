import styled from '@emotion/styled';
import { MdBookmarkAdd } from 'react-icons/md';
import { MdBookmarkAdded } from 'react-icons/md';

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

const setColor = props => {
  if (!props.disabled) {
    return 'red';
  }
  return 'null';
};

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  padding: 7px;
  border: 0px;
  border-radius: 4px;
  background-image: ${setBackgroundImage};
  border-radius: 50%;

  @media screen and (min-width: 767px) {
    width: 150px;
    padding: 15px;
    background: transparent;
    color: white;
    border-width: 2px;
    border-color: white;
    border-style: solid;
    font-weight: bolder;
    margin-left: 10px;
    border-radius: 5px;
  }

  cursor: pointer;
  &:hover,
  &:focus {
    /* background-image: ${setHover}; */
    border-color: ${setColor};
    color: ${setColor};
    svg {
      color: ${setColor};
    }
  }
`;

export const AddIcon = styled(MdBookmarkAdd)`
  color: white;
  font-size: 20px;
  margin-right: 6px;
`;

export const AddedIcon = styled(MdBookmarkAdded)`
  color: white;
  font-size: 20px;
  margin-right: 6px;
`;
