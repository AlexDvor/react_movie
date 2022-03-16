import Container from '../Container';
import { WrapperFooter, ContentBox } from './Footer.styled';
import LanguageSelectBtn from '../LanguageSelectBtn/LanguageSelectBtn';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function Footer() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    isLoggedIn && (
      <WrapperFooter>
        <Container>
          <ContentBox>
            <LanguageSelectBtn />
          </ContentBox>
        </Container>
      </WrapperFooter>
    )
  );
}
