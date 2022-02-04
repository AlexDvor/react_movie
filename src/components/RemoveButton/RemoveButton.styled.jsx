import styled from '@emotion/styled';
import { TiDeleteOutline } from 'react-icons/ti';

export const StyledButton = styled.button`
  /* width: 30px;   */
  /* height: 30px;  */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  /* padding: 5px; */
  border: 0px;
  border-radius: 4px;
  /* background-image: linear-gradient(0deg, rgba(64, 145, 108, 1) 49%, rgba(116, 198, 157, 1) 100%); */
  background-color: transparent;

  cursor: pointer;
  &:hover,
  &:focus {
    /* background-image: linear-gradient(0deg, rgba(47, 106, 78, 1) 49%, rgba(107, 184, 145, 1) 100%); */
  }
`;

export const DeleteIcon = styled(TiDeleteOutline)`
  color: #9ac7fa;
  font-size: 30px;
  &:hover,
  &:focus {
    color:  #be2c2c;
`;
