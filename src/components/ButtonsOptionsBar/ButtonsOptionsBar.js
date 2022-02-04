import { WrapperButton, ListButton, ItemButton } from './ButtonsOptionsBar.styled';
import getRandomId from '../../helpers/getRandomId';

export default function ButtonsOptionsBar({ children, bottom, left }) {
  return (
    <>
      <WrapperButton bottom={bottom} left={left}>
        <ListButton>
          {children && children.map(item => <ItemButton key={getRandomId(10)}>{item}</ItemButton>)}
        </ListButton>
      </WrapperButton>
    </>
  );
}
