import styled from '@emotion/styled';

export const WrapperFooter = styled.div`
  border-top: 1px solid black;
  background-color: rgb(20, 20, 20);
  /* background-color: rgb(46, 46, 46); */
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 768px) {
    justify-content: end;
  }
`;
