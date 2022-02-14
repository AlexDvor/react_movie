import { WrapperLogo, Img } from './Logo.styled';
import imageLogo from '../../images/logo.png';

export default function Logo() {
  return (
    <>
      <WrapperLogo>
        <Img src={imageLogo} alt="logo" />
      </WrapperLogo>
    </>
  );
}
