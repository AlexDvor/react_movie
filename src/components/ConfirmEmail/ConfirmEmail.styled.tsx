import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WrapperMessage = styled.div`
  width: 300px;
  padding: 40px 17px;
  background-color: rgb(0, 0, 0, 0.65);
  border-radius: 5px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 436px;
    padding: 50px 85px;
  }
`;

export const Message = styled.h2`
  color: #db4242;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 44px;
  background-color: red;
  border-radius: 5px;
  margin: 0px auto;

  @media (min-width: 768px) {
    width: 125px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 15px 38px;
  text-decoration: none;

  &:focus,
  &:hover {
    color: black;
  }
`;
