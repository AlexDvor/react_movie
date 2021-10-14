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
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
}
