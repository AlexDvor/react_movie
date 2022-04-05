import { useEffect } from 'react';
import { Overlay, ContentModal } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

type TProps = {
  children: JSX.Element;
  onClose: () => void;
};

export default function Modal({ children, onClose }: TProps) {
  useEffect(() => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
