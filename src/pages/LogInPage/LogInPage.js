import Container from '../../components/Container';
import { WrapperBackImage } from './LoginPage.styled';
import Logo from '../../components/Logo/Logo';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function LogInPage() {
  return (
    <>
      <WrapperBackImage>
        <Logo></Logo>
        <Container>
          <LogInForm />
        </Container>
      </WrapperBackImage>
    </>
  );
}
