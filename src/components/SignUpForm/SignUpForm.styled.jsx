import styled from '@emotion/styled';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

export const WrapperForm = styled.div`
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

export const Title = styled.h2`
  text-align: center;
  color: white;
  margin-bottom: 25px;
`;

export const WrapperInput = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled(Field)`
  width: 220px;
  height: 52px;
  background-color: #343434;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 17px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 265px;
  }

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  height: 10px;
  bottom: -3px;
  left: 23px;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;

  @media (min-width: 768px) {
    left: 3px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 44px;
  background-color: red;
  border-radius: 5px;
  margin-right: 15px;

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

export const Button = styled.button`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  width: 100px;
  height: 44px;
  border-radius: 5px;
  text-decoration: none;
  background-color: red;
  border: none;

  &:focus,
  &:hover {
    color: black;
  }

  @media (min-width: 768px) {
    width: 125px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
