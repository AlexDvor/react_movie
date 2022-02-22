import Logo from '../Logo/Logo';
import { MenuIcon, WrapperIcon } from './MobileMenu.styled';
export default function MobileMenu() {
  return (
    <>
      <Logo width="150px" position="initial" />
      <WrapperIcon>
        <MenuIcon />
      </WrapperIcon>
    </>
  );
}
