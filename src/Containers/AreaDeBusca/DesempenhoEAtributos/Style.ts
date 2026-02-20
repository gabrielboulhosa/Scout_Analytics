import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 69% 29%;
  grid-gap: 2%;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;

export const SectionDesempenhoContainer = styled.section`
  width: 100%;
  padding: 10px 10px;
  ul {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2%;
    gap: 10px;
  }

  li {
    background-color: #10192bff;
    border: 1px solid #ffffff14;
    padding: 6px 16px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    list-style: none;

    span {
      color: gray;
      padding-bottom: 10px;
      padding-top: 10px;
    }
  }

  @media (max-width: 767px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const AsideAtributosContainer = styled.aside`
  width: 100%;
  padding: 10px 10px;
`;
