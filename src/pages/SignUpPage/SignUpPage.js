import { WrapperBackImage } from './SignUpPage.styled';
import { useSelector } from 'react-redux';
import { getSentLetter, getUsername, isLoadingAuth } from '../../redux/auth/auth-selectors';
//components
import Container from '../../components/Container';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
import ConfirmEmail from '../../components/ConfirmEmail/ConfirmEmail';
import Spinner from '../../components/Spinner/Spinner';

export default function SignUpPage() {
  const isSentLetter = useSelector(getSentLetter);
  const userName = useSelector(getUsername);
  const isLoading = useSelector(isLoadingAuth);

  return (
    <>
      {!isLoading ? (
        <WrapperBackImage>
          <Logo width="220px" />
          <Container>{!isSentLetter ? <SignUpForm /> : <ConfirmEmail name={userName} />}</Container>
        </WrapperBackImage>
      ) : (
        <Spinner />
      )}
    </>
  );
}
