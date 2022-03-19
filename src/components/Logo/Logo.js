import { WrapperLogo, Img } from './Logo.styled';
import imageLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default function Logo({ width, position }) {
  return (
    <>
      <Link to="/home">
        <WrapperLogo width={width} position={position}>
          <Img src={imageLogo} alt="logo" />
        </WrapperLogo>
      </Link>
    </>
  );
}
