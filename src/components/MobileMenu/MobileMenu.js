import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
//components
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import LogOutConfirmModal from '../LogOutConfirmModal/LogOutConfirmModal';
//style
import {
  MenuIcon,
  WrapperIcon,
  StyledLink,
  ListLink,
  LinkItem,
  ExitButton,
} from './MobileMenu.styled';

export default function MobileMenu() {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(state => !state);
  const closeModal = () => setModal(false);
  const handleClick = () => {
    setShow(false);
    setModal(true);
  };
  return (
    <>
      <Logo width="150px" position="initial" />
      <WrapperIcon onClick={toggleShow}>
        <MenuIcon />
      </WrapperIcon>
      {show && (
        <>
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            style={{ background: 'rgb(26 26 26 / 80%)', color: 'white' }}
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>
                <UserMenu showExitButton={false} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListLink onClick={handleClose}>
                <LinkItem>
                  <StyledLink to="/">Home</StyledLink>
                </LinkItem>

                <LinkItem>
                  <StyledLink to="/my_list">My List</StyledLink>
                </LinkItem>

                <LinkItem>
                  <StyledLink to="/search">Search</StyledLink>
                </LinkItem>

                <LinkItem>
                  <ExitButton onClick={handleClick}>Exit</ExitButton>
                </LinkItem>
              </ListLink>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
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

// style={{ color: 'white' }}
