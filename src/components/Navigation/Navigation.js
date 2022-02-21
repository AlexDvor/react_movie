import {
  NavList,
  NavItem,
  StyledNavLink,
  ListButton,
  ItemButton,
  ExitButton,
} from './Navigation.styled';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <>
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
          <ExitButton type="submit" onClick={() => dispatch(authOperations.logout())}>
            LogOut
          </ExitButton>
        </ItemButton>
      </ListButton>
    </>
  );
}
