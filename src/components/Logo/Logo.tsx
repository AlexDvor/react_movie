import { WrapperLogo, Img } from './Logo.styled';
import { Link } from 'react-router-dom';
import imageLogo from '../../images/logo.png';

type TProps = {
  width: string;
  position: string;
};

export default function Logo({ width, position }: TProps) {
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
