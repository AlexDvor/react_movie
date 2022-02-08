import Navigation from '../Navigation/Navigation';
import Container from '../Container';
import { WrapperAppBar, ContentBox } from './AppBar.styled';
import LanguageSelectBox from '../LanguageSelectBox/LanguageSelectBox';

export default function AppBar() {
  return (
    <WrapperAppBar>
      <Container>
        <ContentBox>
          <Navigation />
          <LanguageSelectBox />
        </ContentBox>
      </Container>
    </WrapperAppBar>
  );
}
