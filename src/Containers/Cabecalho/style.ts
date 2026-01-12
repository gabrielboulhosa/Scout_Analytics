import styled from "styled-components";

export const CabecalhoContainer = styled.header`
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #0b1220;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  h3 {
    color: #e5e7eb;
  }

  form {
    width: 50%;
    text-align: center;
    margin-left: 10px;
  }

  input {
    width: 90%;
    padding: 11px;
    border-radius: 10px;
    border: none;
    border: 2px solid #e5e7eb;
    background-color: #d6d8dbff;
  }

  button {
    margin-left: 10px;
    padding: 10px 10px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: #f3f4f6;

    &:hover {
      background-color: #3b82f6;
      color: #f3f4f6;
    }
  }
`;
