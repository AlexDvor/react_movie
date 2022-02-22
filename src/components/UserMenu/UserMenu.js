import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { getUsername } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import {
  Wrapper,
  AvatarBox,
  FirstLetterName,
  ExitButton,
  NameBox,
  Name,
  ExitIcon,
} from './UserMenu.styled';

export default function UserMenu() {
  const userName = useSelector(getUsername);
  const dispatch = useDispatch();
  return (
    <>
      <Wrapper>
        <AvatarBox>
          <FirstLetterName>{userName[0]}</FirstLetterName>
        </AvatarBox>
        <NameBox>
          <Name>{userName}</Name>
        </NameBox>
        <ExitButton type="submit" onClick={() => dispatch(authOperations.logout())}>
          <ExitIcon />
        </ExitButton>
      </Wrapper>
    </>
  );
}
