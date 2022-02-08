import styled from '@emotion/styled';
import { BsExclamationCircle } from 'react-icons/bs';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const BiographyText = styled.div`
  color: white;
`;

export const ActorName = styled.h3`
  color: white;
`;

export const ExclamationIcon = styled(BsExclamationCircle)`
  color: #ff3a3a;
  margin-right: 10px;
`;

export const TextMessage = styled.p`
  display: flex;
  align-items: center;
`;
