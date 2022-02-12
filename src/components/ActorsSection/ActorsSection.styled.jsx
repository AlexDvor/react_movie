import styled from '@emotion/styled';
import { BsExclamationCircle } from 'react-icons/bs';

export const Container = styled.div`
  padding: 0px 20px;
`;

export const WrapperSlider = styled.div`
  margin-bottom: 50px;
`;

export const WrapperImage = styled.div`
  max-width: 425px;

  @media screen and (min-width: 1200px) {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

export const CardWrapper = styled.div`
  padding: 5px;
`;

export const WrapperActor = styled.div`
  margin-bottom: 50px;
`;

export const ExclamationIcon = styled(BsExclamationCircle)`
  color: #ff3a3a;
  margin-right: 10px;
`;

export const Message = styled.p`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
