import styled from '@emotion/styled';
import { MdDelete } from 'react-icons/md';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border: 0px;
  width: 125px;
  height: 35px;
  padding: 7px;
  background: linear-gradient(to right top, #780000, #890409, #9c0810, #ae0d17, #c1121f);
  color: white;
  font-weight: bold;
  border-radius: 5px;

  cursor: pointer;
  &:hover,
  &:focus {
    color: black;
    svg {
      color: black;
    }
  }
`;

export const DeleteIcon = styled(MdDelete)`
  color: white;
  font-size: 20px;
  margin-right: 6px;
`;
