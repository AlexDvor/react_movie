import styled from '@emotion/styled';

export const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  color: white;
  padding: 5px 40px;
  border: 0px;
  border-radius: 4px;
  /* background-image: ${props => (props.disabled ? 'red' : 'green')}; */
  /* background-image: ${props => {
    if (!props.disabled) {
      return 'linear-gradient(0deg, rgba(64, 145, 108, 1) 49%, rgba(116, 198, 157, 1) 100%)';
    }
    return 'linear-gradient(0deg, rgba(87,87,87,1) 2%, rgba(187,187,187,1) 100%)';
  }}; */

  background-image: linear-gradient(0deg, rgba(64, 145, 108, 1) 49%, rgba(116, 198, 157, 1) 100%);
  transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-image: linear-gradient(0deg, rgba(47, 106, 78, 1) 49%, rgba(107, 184, 145, 1) 100%);
  }
`;
