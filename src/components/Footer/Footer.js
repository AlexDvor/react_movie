import Container from '../Container';
import { WrapperFooter, ContentBox } from './Footer.styled';
import LanguageSelectBtn from '../LanguageSelectBtn/LanguageSelectBtn';

export default function Footer() {
  return (
    <WrapperFooter>
      <Container>
        <ContentBox>
          <LanguageSelectBtn />
        </ContentBox>
      </Container>
    </WrapperFooter>
  );
}
