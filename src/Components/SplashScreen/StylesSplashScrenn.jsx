import { styled } from "styled-components";
import { keyframes } from "styled-components";

export const Screen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`;
const slideInAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;
export const CarImage = styled.img`
 position: absolute;
 width: 30%;
  left: 70%;
  top: 16%;
  padding: 0%;
  margin: 0;
  animation: ${slideInAnimation} 4s forwards;
`;
