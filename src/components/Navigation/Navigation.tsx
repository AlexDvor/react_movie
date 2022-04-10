import { NavList, NavItem, StyledNavLink } from './Navigation.styled';

type TObject = {
  color: string;
};

const setActivePage = (state: boolean): TObject => {
  if (state) {
    return { color: '#c1121f' };
  } else {
    return { color: 'white' };
  }
};

export default function Navigation() {
  return (
    <>
      <NavList>
        <NavItem>
          <StyledNavLink exact to="/home" style={setActivePage}>
            Home
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/my_list" style={setActivePage}>
            My List
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/search" style={setActivePage}>
            Search
          </StyledNavLink>
        </NavItem>
      </NavList>
    </>
  );
}
