import styled from "styled-components";
import theme from "../../themes/allThemes.js";

export const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${theme.COLORS.BACKGROUND};
`;
export const HomePhotoStyle = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    font-size: 120px;
    color: #6b6ecb;
    font-family: "Et Cetera Black W00 Regular";
    margin-top: 90px;
  }
  & span p {
    text-align: justify;
    width: 300px;
    margin-top: 30px;
    opacity: 0.5;
  }
  & button {
    border-radius: 50px;
    background-color: #a52524;
    color: white;
    border-color: transparent;
    width: 50%;
    height: 50px;
    cursor: pointer;
  }
`;
