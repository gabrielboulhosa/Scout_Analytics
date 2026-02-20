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

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    h3 {
      margin-bottom: 10px;
    }

    button {
      display: none;
    }

    form {
      width: 100%;
    }

    input {
      width: 90%;
      padding: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    h3 {
      margin-bottom: 10px;
    }

    button {
      display: none;
    }

    form {
      width: 100%;
    }

    input {
      width: 70%;
      padding: 10px;
    }
  }
`;
