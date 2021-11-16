import { StyledButton } from './AddButton.styled';
import { IoIosAddCircle } from 'react-icons/io';
export default function AddButton() {
  return (
    <>
      <StyledButton type="button">
        <IoIosAddCircle color="white" fontSize="17px" />
        Add
      </StyledButton>
    </>
  );
}
