// components
import Container from '../Container';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import MobileMenu from '../MobileMenu/MobileMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { WrapperAppBar, MobileMenuContent, DesktopMenuContent } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    isLoggedIn && (
      <WrapperAppBar>
        <Container>
          <DesktopMenuContent>
            <Navigation />
            <UserMenu showExitButton={true} />
          </DesktopMenuContent>
          <MobileMenuContent>
            <MobileMenu />
          </MobileMenuContent>
        </Container>
      </WrapperAppBar>
    )
  );
}
