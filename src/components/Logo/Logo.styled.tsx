import styled from '@emotion/styled';

type PositionProps = {
  width: string;
  position?: string;
};

const setPosition = (props: PositionProps): string => {
  if (!props.position) {
    return 'absolute';
  }
  return props.position;
};

export const WrapperLogo = styled.div<PositionProps>`
  position: ${setPosition};
  top: 18px;
  left: 35px;
  width: ${props => props.width};
  height: auto;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;
