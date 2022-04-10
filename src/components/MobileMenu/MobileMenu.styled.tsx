import styled from '@emotion/styled';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const WrapperIcon = styled.div`
  padding: 20px 0px;
  cursor: pointer;
`;
export const MenuIcon = styled(FiMenu)`
  font-size: 30px;
  color: #9f9f9f;
`;
export const ListLink = styled.ul``;
export const LinkItem = styled.li`
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right top, #780000, #890409, #9c0810, #ae0d17, #c1121f);
  &:not(:first-of-type) {
    margin-top: 20px;
  }
  &:hover,
  &:focus {
    background: linear-gradient(0deg, #440404 28%, #991212 100%);
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  width: 100%;
  &:hover,
  &:focus {
    color: white;
  }
`;

export const ExitButton = styled.button`
  display: block;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  color: white;
  width: 100%;
`;
