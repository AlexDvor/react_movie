import Navigation from '../Navigation/Navigation';
import Container from '../Container';
import { WrapperAppBar, ContentBox } from './AppBar.styled';

export default function AppBar() {
  return (
    <WrapperAppBar>
      <Container>
        <ContentBox>
          <Navigation />
        </ContentBox>
      </Container>
    </WrapperAppBar>
  );
}
