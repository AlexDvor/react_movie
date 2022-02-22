import Navigation from '../Navigation/Navigation';
import Container from '../Container';
import { WrapperAppBar, ContentBox } from './AppBar.styled';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  return (
    <WrapperAppBar>
      <Container>
        <ContentBox>
          <Navigation />
          <UserMenu />
        </ContentBox>
      </Container>
    </WrapperAppBar>
  );
}
