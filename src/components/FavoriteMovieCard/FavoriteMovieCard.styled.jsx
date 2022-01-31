import styled from '@emotion/styled';

export const MovieCard = styled.div`
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  margin: 100px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
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
`;

export const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;
`;

export const Locandina = styled.img`
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
`;

export const TitleMovie = styled.h1`
  color: #fff;
  font-weight: 400;
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
  display: inline-block;
  color: #cee4fd;
  margin-left: 10px;
  padding: 25px;
  height: 50%;
`;

export const Text = styled.p`
  color: #cfd6e1;
`;

export const MovieSocial = styled.div`
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
`;

export const MovieSocialList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieSocialItem = styled.li`
 display: inline-block;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
  &:hover {
    transition: color 0.3s;
    color: rgba(255, 255, 255, 0.8);
  }
}
`;

export const MovieSocialIcon = styled.i`
  font-size: 19px;
  cursor: pointer;
`;

export const BlurBack = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
`;
