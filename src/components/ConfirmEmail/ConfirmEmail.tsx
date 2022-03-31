import { WrapperMessage, Message, WrapperLink, StyledLink } from './ConfirmEmail.styled';



type TName = {
  name: string;
}
export default function ConfirmEmail({ name }:TName) {
  return (
    <>
      <WrapperMessage>
        <Message>{`Please ${name} confirm your email address to start using this app`}</Message>
        <WrapperLink>
          <StyledLink to="/login">LogIn</StyledLink>
        </WrapperLink>
      </WrapperMessage>
    </>
  );
}
