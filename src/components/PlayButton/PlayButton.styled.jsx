import styled from '@emotion/styled';

const setFontSize = props => {
  return !props.disabled ? `14px` : `12px`;
};

const setBackgroundImage = props => {
  if (!props.disabled) {
    return 'linear-gradient(0deg, rgba(64, 145, 108, 1) 49%, rgba(116, 198, 157, 1) 100%)';
  }
  return 'linear-gradient(0deg, rgba(87,87,87,1) 2%, rgba(187,187,187,1) 100%)';
};

const setHover = props => {
  console.log('props,', props);
  if (!props.disabled) {
    return 'linear-gradient(0deg, rgba(47, 106, 78, 1) 49%, rgba(107, 184, 145, 1) 100%)';
  }
  return null;
};

export const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${setFontSize};
  color: white;
  padding: 5px 20px;
  border: 0px;
  border-radius: 4px;
  background-image: ${setBackgroundImage};

  cursor: pointer;
  &:hover,
  &:focus {
    background-image: ${setHover};
  }
`;
