import Navigation from '../Navigation/Navigation';
import Container from '../Container';
import { WrapperAppBar, ContentBox } from './AppBar.styled';
import SearchAppBar from '../SearchBar/SearchBar';

export default function AppBar() {
  return (
    <WrapperAppBar>
      <Container>
        <ContentBox>
          <Navigation />
          <SearchAppBar />
        </ContentBox>
      </Container>
    </WrapperAppBar>
  );
}
