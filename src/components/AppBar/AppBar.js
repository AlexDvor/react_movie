import Navigation from '../Navigation/Navigation';
import Container from '../Container';
import { WrapperAppBar } from './AppBar.styled';

export default function AppBar() {
  return (
    <WrapperAppBar>
      <Container>
        <Navigation />
      </Container>
    </WrapperAppBar>
  );
}
