import Navigation from '../Navigation/Navigation';
import Container from '../Container';
import { WrapperAppBar, ContentBox } from './AppBar.styled';
import LenguajesBox from '../LenguajesBox/LenguajesBox';

export default function AppBar() {
  return (
    <WrapperAppBar>
      <Container>
        <ContentBox>
          <Navigation />
          <LenguajesBox />
        </ContentBox>
      </Container>
    </WrapperAppBar>
  );
}
