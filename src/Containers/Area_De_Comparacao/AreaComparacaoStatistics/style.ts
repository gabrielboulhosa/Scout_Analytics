import styled from "styled-components";

export const AreaComparacaoStatisticsContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px 0;
  background-color: #10192bff;
  border: 1px solid #ffffff14;
  border-top: none;
  margin-bottom: 20px;
  .areaCentra2 {
    span {
      color: #f3f4f6;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export const AreaComparacaoStatisticsInfoPlayers = styled.main`
  text-align: center;
  padding: 10px 10px;
`;
