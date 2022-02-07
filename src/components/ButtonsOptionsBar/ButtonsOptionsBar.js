import { WrapperButton } from './ButtonsOptionsBar.styled';
// import getRandomId from '../../helpers/getRandomId';

export default function ButtonsOptionsBar({ children, bottom, left }) {
  return (
    <>
      <WrapperButton bottom={bottom} left={left}>
        {/* {children && children.map(item => <ItemButton key={getRandomId(10)}>{item}</ItemButton>)} */}
        {children}
      </WrapperButton>
    </>
  );
}
