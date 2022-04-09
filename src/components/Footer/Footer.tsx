import Container from '../Container/Container';
import { WrapperFooter, ContentBox } from './Footer.styled';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import LanguageSelectBtn from '../LanguageSelectBtn/LanguageSelectBtn';

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
