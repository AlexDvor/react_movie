import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import { MenuIcon, WrapperIcon, StyledLink, ListLink, LinkItem } from './MobileMenu.styled';

export default function MobileMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(s => !s);

  return (
    <>
      <Logo width="150px" position="initial" />
      <WrapperIcon onClick={toggleShow}>
        <MenuIcon />
      </WrapperIcon>
      {show && (
        <>
          {/* <Button variant="primary" onClick={toggleShow} className="me-2">
            1111
          </Button> */}
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            style={{ background: '#0e0c0ccc', color: 'white' }}
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
              </ListLink>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

// style={{ color: 'white' }}
