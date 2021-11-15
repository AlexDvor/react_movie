import { NavList, NavItem, StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <nav>
      <NavList>
        <NavItem>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/movies">My List</StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
}
