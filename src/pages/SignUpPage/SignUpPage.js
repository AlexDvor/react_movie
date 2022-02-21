import Container from '../../components/Container';
import { WrapperBackImage } from './SignUpPage.styled';
import { useSelector } from 'react-redux';
import { getSentLetter } from '../../redux/auth/auth-selectors';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function SignUpPage() {
  const isSentLetter = useSelector(getSentLetter);

  return (
    <>
      <WrapperBackImage>
        <Logo />
        <Container>
          {!isSentLetter ? (
            <SignUpForm />
          ) : (
            <h1 style={{ color: 'white' }}>We will send you message</h1>
          )}
        </Container>
      </WrapperBackImage>
    </>
  );
}
