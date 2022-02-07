import styled from '@emotion/styled';

export const WrapperSlider = styled.div`
  margin-bottom: 50px;
`;

export const WrapperImage = styled.div`
  max-width: 425px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    /* outline: solid 1px red; */
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

export const CardWrapper = styled.div`
  padding: 5px;
  /* background-color: white; */
`;

export const WrapperActor = styled.div`
  margin-bottom: 50px;
`;
