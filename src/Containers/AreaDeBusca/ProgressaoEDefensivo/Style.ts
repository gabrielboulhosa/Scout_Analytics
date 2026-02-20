import styled from "styled-components";

export const SectionProgressaoContainern = styled.section`
  width: 100%;
  padding: 10px 10px;
  margin-bottom: 25px;
  .prograssaoInfo {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2%;
    gap: 10px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
`;

export const AsideDefensivoContainer = styled.aside`
  width: 100%;
  padding: 10px 10px;

  .defensivoInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #10192bff;
    border: 1px solid #ffffff14;
    border-radius: 15px;
    margin-top: 20px;
    padding: 5px 10px;

    .defensivoInfoDados {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f3f4f6;
      padding-bottom: 10px;
      margin-bottom: 23px;

      span {
        font-size: 16px;
        font-weight: 600;
        color: #f3f4f6;
      }
    }
  }
`;
