// components
import Container from '../Container';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import MobileMenu from '../MobileMenu/MobileMenu';

import { WrapperAppBar, MobileMenuContent, DesktopMenuContent } from './AppBar.styled';

export default function AppBar() {
  return (
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
  );
}
