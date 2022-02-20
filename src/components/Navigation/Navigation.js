import {
  NavBox,
  NavList,
  NavItem,
  StyledNavLink,
  ListButton,
  ItemButton,
  ExitButton,
} from './Navigation.styled';

export default function Navigation() {
  return (
    <NavBox>
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
      <ListButton>
        <ItemButton>
          <ExitButton>LogOut</ExitButton>
        </ItemButton>
      </ListButton>
    </NavBox>
  );
}
