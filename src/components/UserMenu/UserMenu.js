import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { getUsername } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  AvatarBackground,
  WrapperAvatar,
  FirstLetterName,
  ExitButton,
  WrapperButton,
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
        <WrapperAvatar>
          <AvatarBackground>
            <FirstLetterName>{userName[0]}</FirstLetterName>
          </AvatarBackground>
        </WrapperAvatar>

        <NameBox>
          <Name>{userName}</Name>
        </NameBox>
        <WrapperButton>
          <ExitButton type="submit" onClick={() => dispatch(authOperations.logout())}>
            <ExitIcon />
          </ExitButton>
        </WrapperButton>
      </Wrapper>
    </>
  );
}
