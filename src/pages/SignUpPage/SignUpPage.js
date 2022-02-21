import Container from '../../components/Container';
import { WrapperBackImage } from './SignUpPage.styled';
import { useSelector } from 'react-redux';
import { getSentLetter, getUsername } from '../../redux/auth/auth-selectors';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
import ConfirmEmail from '../../components/ConfirmEmail/ConfirmEmail';

export default function SignUpPage() {
  const isSentLetter = useSelector(getSentLetter);
  const userName = useSelector(getUsername);

  return (
    <>
      <WrapperBackImage>
        <Logo />
        <Container>{!isSentLetter ? <SignUpForm /> : <ConfirmEmail name={userName} />}</Container>
      </WrapperBackImage>
    </>
  );
}
