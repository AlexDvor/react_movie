import styled from '@emotion/styled';

export const ActorName = styled.h4`
  color: white;
`;

export const ActorListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 55px;
  margin: 30px 0px 30px 0px;
`;

export const Item = styled.li`
  width: 200px;
  text-align: center;
  list-style: none;
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 300px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ImageDefault = styled.img`
  display: block;
  max-width: 100%;
  height: 300px;
  object-fit: cover;
`;
