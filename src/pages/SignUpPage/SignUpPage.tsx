import { WrapperBackImage } from './SignUpPage.styled';
import { useSelector } from 'react-redux';
import { isLoadingAuth } from '../../redux/auth/auth-selectors';
//components
import Container from '../../components/Container/Container';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
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
