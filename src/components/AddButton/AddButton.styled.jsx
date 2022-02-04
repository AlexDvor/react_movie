import styled from '@emotion/styled';
import { MdBookmarkAdd } from 'react-icons/md';
import { MdBookmarkAdded } from 'react-icons/md';

const setBackgroundImage = props => {
  if (!props.disabled) {
    return 'linear-gradient(0deg, rgba(64, 145, 108, 1) 49%, rgba(116, 198, 157, 1) 100%)';
  }
  return 'linear-gradient(0deg, rgba(87,87,87,1) 2%, rgba(187,187,187,1) 100%)';
};

const setHover = props => {
  if (!props.disabled) {
    return 'linear-gradient(0deg, rgba(47, 106, 78, 1) 49%, rgba(107, 184, 145, 1) 100%)';
  }
  return null;
};

export const StyledButton = styled.button`
  /* width: 100px;
  height: 30px; */
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

  cursor: pointer;
  &:hover,
  &:focus {
    background-image: ${setHover};
  }
`;

export const AddIcon = styled(MdBookmarkAdd)`
  color: white;
  font-size: 20px;
`;

export const AddedIcon = styled(MdBookmarkAdded)`
  color: white;
  font-size: 20px;
`;
