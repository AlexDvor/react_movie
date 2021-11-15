import styled from '@emotion/styled';

export const MovieWrapper = styled.div`
  position: relative;
  display: block;
  max-width: 1820px;
  height: 685px;
  margin: 50px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  /* &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
  } */

  box-shadow: 0px 0px 150px -45px rgba(19, 160, 134, 0.6);
  &:hover {
    box-shadow: 0px 0px 120px -55px rgba(19, 160, 134, 0.6);
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 20px auto;
    /* min-height: 350px;
    height: auto; */
    height: 100vh;
  }
`;

export const InfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }

  @media screen and (max-width: 768px) {
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
`;

export const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 231px;
  }
`;
export const MovieTitle = styled.h1`
  color: #fff;
  font-weight: 400;
`;

export const MovieYear = styled.h4`
  color: #9ac7fa;
  font-weight: 400;
`;

export const MovieMinutes = styled.span`
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.13);
`;

export const MovieType = styled.p`
  display: inline-block;
  color: #cee4fd;
  margin-left: 10px;
`;

export const MovieImg = styled.img`
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 769px) {
    height: 250px;
  }
`;

export const MovieDesc = styled.div`
  padding: 25px;
  height: 50%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MovieText = styled.p`
  color: #cfd6e1;
`;

/////// MovieSocial wrapper
export const MovieSocial = styled.div`
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px; ;
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
`;

export const MovieI = styled.i`
  font-size: 19px;
  cursor: pointer;
`;

///////

/////// MovieButtons
export const MovieButtonsContainer = styled.div`
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
`;

export const MovieButtonsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieButtonsItem = styled.li``;

///////
export const BlurBack = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    background-position: 50% 50%;
  }
`;
