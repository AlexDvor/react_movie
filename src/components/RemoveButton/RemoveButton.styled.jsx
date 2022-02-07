import styled from '@emotion/styled';
import { MdDelete } from 'react-icons/md';

const setBackgroundImage = props => {
  if (!props.disabled) {
    return 'linear-gradient(0deg, rgb(30 77 116) 49%, rgb(0 241 253 / 45%) 100%)';
  }
  return 'linear-gradient(0deg, rgba(87,87,87,1) 2%, rgba(187,187,187,1) 100%)';
};

export const StyledButton = styled.button`
  /* width: 30px;   */
  /* height: 30px;  */
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
    background-image: linear-gradient(0deg, rgb(141 17 57) 49%, rgb(219 117 164 / 45%) 100%);
  }
`;

export const DeleteIcon = styled(MdDelete)`
  color: white;
  font-size: 20px;
  /* &:hover,
  &:focus {
    color:  #070707; */
`;
