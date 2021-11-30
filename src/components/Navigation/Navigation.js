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
          <StyledNavLink to="/my_list">My List</StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/search">Search</StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
}
