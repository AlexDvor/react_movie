import { StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}
