import styled from '@emotion/styled';
import { MdExitToApp } from 'react-icons/md';

const setDisplay = props => {
  if (props.showExitButton === true) {
    return 'block';
  } else {
    return 'none';
  }
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperAvatar = styled.div`
  padding: 20px 0px;
`;
export const AvatarBackground = styled.div`
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
export const NameBox = styled.div`
  margin-right: 12px;
`;
export const Name = styled.p`
  display: inline;
  color: White;
`;
export const WrapperButton = styled.div`
  padding: 20px 0px;
  display: ${setDisplay};
`;
export const ExitButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const ExitIcon = styled(MdExitToApp)`
  font-size: 25px;
  color: white;
`;
