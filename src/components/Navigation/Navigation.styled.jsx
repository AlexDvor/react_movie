import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  font-size: 20px;
  list-style: none;
  display: flex;
`;
export const NavItem = styled.li`
  font-size: 20px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)({
  color: 'blue',
  '&[aria-current="page"]': {
    color: 'tomato',
  },
});
