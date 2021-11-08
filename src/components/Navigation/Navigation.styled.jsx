import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  padding: 20px 0px;
  &:not(:first-of-type) {
    margin-left: 25px;
  }
`;

export const StyledNavLink = styled(NavLink)({
  color: 'white',
  '&[aria-current="page"]': {
    color: 'tomato',
  },
});
