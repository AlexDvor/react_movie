import { WrapperBackImage } from './LoginPage.styled';
import { isLoadingAuth } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
//components
import Container from '../../components/Container';
import Logo from '../../components/Logo/Logo';
import LogInForm from '../../components/LogInForm/LogInForm';
import Spinner from '../../components/Spinner/Spinner';

export default function LogInPage() {
  const isLoading = useSelector(isLoadingAuth);

  return (
    <>
      <WrapperBackImage>
        <Logo width="220px" />
        <Container>{!isLoading ? <LogInForm /> : <Spinner />}</Container>
      </WrapperBackImage>
    </>
  );
}
