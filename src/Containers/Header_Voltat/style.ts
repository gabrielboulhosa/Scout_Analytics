import styled from "styled-components";

export const Header_Voltat_Container = styled.div`
  width: 98%;
  margin: 0 auto;
  padding: 10px 10px;

  border-radius: 10px;
  background-color: #10192bff;

  button {
    cursor: pointer;
    border: 0;
    padding: 0;
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    cursor: pointer;
    display: block;
    transition: transform 0.15s ease;
  }

  button:hover svg {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 20px;
  }
`;
