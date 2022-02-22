import styled from '@emotion/styled';
import { MdExitToApp } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: rgb(187, 37, 37);
  border-radius: 50%;
  margin-right: 12px;
`;
export const FirstLetterName = styled.div`
  color: white;
  font-size: 18px;
`;
export const ExitButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const NameBox = styled.div`
  margin-right: 12px;
`;

export const Name = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    color: White;
  }
`;
export const ExitIcon = styled(MdExitToApp)`
  font-size: 25px;
  color: white;
`;
