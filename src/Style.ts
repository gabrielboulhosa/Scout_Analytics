import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  body {
  background-color: #0B1220;
}






`;

export const Container = styled.div`
  padding-top: 100px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: #0b1220;

  .loader {
    width: 130px;
    height: 130px;
    border: 8px solid #e5e7eb;
    border-top: 8px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    text-align: center;
    margin: 0 auto;
    margin-top: 200px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
