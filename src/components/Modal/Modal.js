import { useEffect } from 'react';
import { Overlay, ContentModal } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <>
      <Overlay onClick={handleBackDropClick}>
        <ContentModal>{children}</ContentModal>
      </Overlay>
    </>,
    modalRoot,
  );
}
