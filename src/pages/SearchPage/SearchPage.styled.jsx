import styled from '@emotion/styled';

export const ContentBox = styled.div`
  padding: 20px 0px 20px 0px;
`;

export const MovieListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const SearchWrapper = styled.div`
  margin-bottom: 25px;
`;
export const MovieCardItem = styled.li``;

export const MovieCardWrapper = styled.div`
  width: 200px;
  height: 300px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  border-radius: 5px;
`;

export const DefaultImage = styled.img`
  display: block;
  max-width: 100%;
  height: 300px;
  object-fit: cover;
`;
