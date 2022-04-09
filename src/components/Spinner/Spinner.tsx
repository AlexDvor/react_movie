import { MutatingDots } from 'react-loader-spinner';
import { Overlay, WrapperSpinner } from './Spinner.styled';

export default function Spinner() {
  return (
    <>
      <Overlay>
        <WrapperSpinner>
          <MutatingDots
            ariaLabel="loading-indicator"
            color="#d61515"
            height="100"
            width="100"
            secondaryColor="white"
          />
        </WrapperSpinner>
      </Overlay>
    </>
  );
}
