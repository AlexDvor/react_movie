import Container from '../Container';
import { WrapperFooter, ContentBox } from './Footer.styled';
import LanguageSelectBox from '../LanguageSelectBox/LanguageSelectBox';

export function Footer() {
  return (
    <WrapperFooter>
      <Container>
        <ContentBox>
          <LanguageSelectBox />
        </ContentBox>
      </Container>
    </WrapperFooter>
  );
}
