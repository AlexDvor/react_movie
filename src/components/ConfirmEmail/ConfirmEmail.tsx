import { WrapperMessage, Message, WrapperLink, StyledLink } from './ConfirmEmail.styled';

type Props = {
  name: string;
};

export default function ConfirmEmail({ name }: Props) {
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
