import { WrapperLogo, Img } from './Logo.styled';
import imageLogo from '../../images/logo.png';

export default function Logo({ width, position }) {
  return (
    <>
      <WrapperLogo width={width} position={position}>
        <Img src={imageLogo} alt="logo" />
      </WrapperLogo>
    </>
  );
}
