import styled from '@emotion/styled';

export const WrapperAppBar = styled.div`
  border-bottom: 1px solid black;
  background-color: rgb(20, 20, 20);
`;

export const MobileMenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const DesktopMenuContent = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
