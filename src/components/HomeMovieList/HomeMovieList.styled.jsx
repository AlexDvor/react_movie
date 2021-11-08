import styled from '@emotion/styled';

export const MovieList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: -10px;
`;

export const MovieItem = styled.li`
  margin-left: 10px;
  margin-top: 10px;
  flex-basis: calc((100% - 30px) / 3);
`;

export const WrapperThumb = styled.div`
  max-width: 200px;
`;
export const WrapperContent = styled.div``;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
