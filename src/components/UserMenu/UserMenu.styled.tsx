import styled from '@emotion/styled';
import { MdExitToApp } from 'react-icons/md';

type PropsButton = {
  showExitButton: boolean;
};

const setDisplay = (props: PropsButton) => {
  if (props.showExitButton) {
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
  background: linear-gradient(to right top, #780000, #890409, #9c0810, #ae0d17, #c1121f);
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
export const WrapperButton = styled.div<PropsButton>`
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
