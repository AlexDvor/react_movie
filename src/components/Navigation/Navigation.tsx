import { NavList, NavItem, StyledNavLink } from './Navigation.styled';

type TObject = {
  color: string;
};

export default function Navigation() {
  const setActivePage = (state: boolean): TObject => {
    if (state) {
      return { color: '#c1121f' };
    } else {
      return { color: 'white' };
    }
  };

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
