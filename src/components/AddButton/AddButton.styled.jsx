import styled from '@emotion/styled';
import { MdBookmarkAdd } from 'react-icons/md';
import { MdBookmarkAdded } from 'react-icons/md';

const setHover = props => {
  if (!props.disabled) {
    return '#c1121f';
  }
  return 'null';
};

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 7px;
  background: transparent;
  color: white;
  border-width: 2px;
  border-color: white;
  border-style: solid;
  font-weight: bold;
  font-size: 12px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 150px;
    padding: 15px;
  }

  &:hover,
  &:focus {
    border-color: ${setHover};
    color: ${setHover};
    svg {
      color: ${setHover};
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
