import styled from '@emotion/styled';

const setPosition = props => {
  if (!props.position) {
    return 'absolute';
  }
  return props.position;
};

export const WrapperLogo = styled.div`
  position: ${setPosition};
  top: 18px;
  left: 35px;
  width: ${props => props.width};
  height: auto;
  /* background-image: url('../../images/logo.png'); */
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;
