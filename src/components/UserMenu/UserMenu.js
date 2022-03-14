import { getUsername } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
//components
import LogOutConfirmModal from '../LogOutConfirmModal/LogOutConfirmModal';
//style
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

export default function UserMenu({ showExitButton }) {
  const [modal, setModal] = useState(false);
  const userName = useSelector(getUsername);

  const closeModal = () => {
    setModal(false);
  };

  const handleClick = () => {
    setModal(true);
  };

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
        <WrapperButton showExitButton={showExitButton}>
          <ExitButton type="button" onClick={handleClick}>
            <ExitIcon />
          </ExitButton>
        </WrapperButton>
      </Wrapper>

      {modal && (
        <LogOutConfirmModal
          onClick={closeModal}
          text="Do you really want to leave?"
          cancelOperation={() => setModal(prevState => !prevState)}
        />
      )}
    </>
  );
}
