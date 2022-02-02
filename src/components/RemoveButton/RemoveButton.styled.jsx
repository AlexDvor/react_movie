import styled from '@emotion/styled';

export const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  padding: 5px 20px;
  border: 0px;
  border-radius: 4px;
  background-image: linear-gradient(0deg, rgba(64, 145, 108, 1) 49%, rgba(116, 198, 157, 1) 100%);

  cursor: pointer;
  &:hover,
  &:focus {
    background-image: linear-gradient(0deg, rgba(47, 106, 78, 1) 49%, rgba(107, 184, 145, 1) 100%);
  }
`;
