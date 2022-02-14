import Container from '../../components/Container';
import { WrapperBackImage } from './SignUpPage.styled';

import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage() {
  return (
    <>
      <WrapperBackImage>
        <Container>
          <SignUpForm />
        </Container>
      </WrapperBackImage>
    </>
  );
}
