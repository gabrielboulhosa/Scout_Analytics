import styled from "styled-components";

export const SelecaoDeJogadorContainer = styled.section`
  width: 100%;
  .selecaoTexto {
    text-align: center;
    margin-top: 20px;
  }

  padding: 10px 10px;
  ul {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2%;
    gap: 10px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  li {
    background-color: #10192bff;
    border: 1px solid #ffffff14;
    padding: 6px 6px;
    border-radius: 15px;
    list-style: none;
    text-align: center;
    cursor: pointer;

    &:hover {
      border: 1px solid #3b82f6;
    }

    img {
      height: 150px;
      width: 150px;
      padding: 10px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid #f3f4f6;
    }
  }
`;
