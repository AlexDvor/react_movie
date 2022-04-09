import { Wrapper } from './Container.styled';

type Props = {
  children: JSX.Element | JSX.Element[];
};
export default function Container({ children }: Props) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}
