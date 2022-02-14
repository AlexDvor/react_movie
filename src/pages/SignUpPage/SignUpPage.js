import Container from '../../components/Container';
import { WrapperBackImage } from './SignUpPage.styled';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function SignUpPage() {
  return (
    <>
      <WrapperBackImage>
        <Logo />
        <Container>
          <SignUpForm />
        </Container>
      </WrapperBackImage>
    </>
  );
}
