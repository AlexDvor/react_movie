import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import * as authOperations from '../../redux/auth/auth-operations';
//style
import {
  ModalContainer,
  ModalContent,
  ModalText,
  ButtonContainer,
  CloseButton,
  Overlay,
  WrapperOverlay,
  Button,
} from './LogOutConfirmModal.styled';

export default function LogOutConfirmModal({ onClick, text, cancelOperation }) {
  const dispatch = useDispatch();
  return (
    <>
      <Overlay>
        <WrapperOverlay>
          <ModalContainer>
            <ModalContent>
              <ModalText>{text}</ModalText>
              <ButtonContainer>
                <Button onClick={() => dispatch(authOperations.logout())}>YES</Button>
                <Button onClick={cancelOperation}>NO</Button>
              </ButtonContainer>
            </ModalContent>
            <CloseButton type="button" onClick={onClick}>
              <GrClose size={13} />
            </CloseButton>
          </ModalContainer>
        </WrapperOverlay>
      </Overlay>
    </>
  );
}
