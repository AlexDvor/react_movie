import { WrapperBackImage } from './SignUpPage.styled';
import { useSelector } from 'react-redux';
import { isLoadingAuth } from '../../redux/auth/auth-selectors';
//components
import Container from '../../components/Container';
import SignUpForm from '../../components/SignUpForm/SignUpForm.tsx';
import Logo from '../../components/Logo/Logo.tsx';
import Spinner from '../../components/Spinner/Spinner';

export default function SignUpPage() {
  const isLoading = useSelector(isLoadingAuth);

  return (
    <>
      <WrapperBackImage>
        <Logo width="220px" />
        <Container>{!isLoading ? <SignUpForm /> : <Spinner />}</Container>
      </WrapperBackImage>
    </>
  );
}
