import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4 4 4 / 59%);
  z-index: 10;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const WrapperOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalContainer = styled.div`
  position: relative;
  height: 194px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right top, #780000, #890409, #9c0810, #ae0d17, #c1121f);
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  @media (min-width: 320px) {
    width: 306px;
  }
  @media (min-width: 768px) {
    width: 380px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const ModalText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  padding-bottom: 20px;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 265px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: inherit;
  stroke: #52555f;
  cursor: pointer;
`;

export const Button = styled.button`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  width: 125px;
  height: 44px;
  padding: 12px 15px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 16px;
  border: 0px;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
  &:hover,
  &:focus {
    box-shadow: 1px 2px 5px rgba(25, 30, 43, 0.4);
    color: #bd2b2b;
  }
`;
