import styled from '@emotion/styled';

export const MovieCardList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const MovieCardItem = styled.li`
  position: relative;
  z-index: 1;

  box-shadow: 0px 0px 150px -45px rgb(100 112 255 / 30%);
  &:hover {
    box-shadow: 0px 0px 150px -45px rgb(255 100 143 / 30%);
  }
`;

export const MovieCard = styled.div`
  position: relative;
  display: block;
  width: 95%;
  height: auto;
  margin: 50px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
  }

  @media screen and (min-width: 768px) {
    width: 550px;
    height: 300px;
     margin:0px;
  }
}
`;

export const InfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;

  @media (min-width: 768px) {
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }
  @media (max-width: 768px) {
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
`;

export const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 85px;
  }
`;

export const Image = styled.img`
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
`;

export const TitleMovie = styled.h1`
  color: #fff;
  font-weight: 200;
  font-size: 18px;
`;

export const ReleaseDate = styled.h4`
  color: #9ac7fa;
  font-weight: 400;
`;

export const Minutes = styled.span`
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.13);
`;

export const Type = styled.p`
  display: inline-block;
  color: #cee4fd;
  margin-left: 10px;
`;

export const MovieDesc = styled.div`
  padding: 25px;
  height: 50%;

  @media (min-width: 768px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  color: #cfd6e1;
`;

export const BlurBack = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;

  @media (min-width: 768px) {
    width: 85%;
    background-position: -100% 10%;
  }
  @media (max-width: 768px) {
    width: 100%;
    background-position: 50% 50%;
  }
`;
export const WrapperButton = styled.div`
  position: absolute;
  bottom: 10px;
  left: 12px;
  color: white;
  z-index: 2;
`;

export const ListButton = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ItemButton = styled.li`
  /* &:not(:last-child) {
    margin-right: 10px;
  } */
`;
