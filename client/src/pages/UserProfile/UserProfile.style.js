import styled,{ keyframes } from "styled-components";
// import { Link } from "react-router-dom";
// import Lottie from 'lottie-react';

const HeaderKeyFrame = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-image: linear-gradient(      217deg,      rgba(0,255,159, 0.8),      rgb(165 43 43 / 0%) 70.71%    ), linear-gradient(127deg, rgba(0,184,255, 0.8), rgba(0,30,255, 0) 70.71%),    linear-gradient(358deg, rgba(189,0,255, 0.8), rgba(214,0,255, 0) 70.71%);
  background-position: top center;
  animation: ${HeaderKeyFrame} 4500ms ease infinite;
  background-size: 200% 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  gap: 20px;
`;