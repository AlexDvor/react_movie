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
  background-color: red;
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  width: 100%;
`;
