import styled from "styled-components";

export const HistóricoDeTemporadasContainer = styled.section`
  width: 100%;
  padding: 10px 10px;

  .históricodeTemporadasInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    background-color: #10192bff;
    border: 1px solid #ffffff14;
    border-radius: 15px;
    margin-top: 20px;
    padding: 5px 10px;

    .históricodeTemporadasDados {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 0.5fr 0.5fr 0.5fr 1fr 0.5fr 0.5fr 0.8fr;
      min-width: 860px;
      gap: 10px;
      border-bottom: 1px solid #f3f4f6;
      padding-bottom: 10px;
      margin-bottom: 23px;

      p,
      span {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 8px 0;

    .históricodeTemporadasInfo {
      padding: 8px;

      .históricodeTemporadasDados {
        gap: 8px;
        min-width: 760px;
        margin-bottom: 16px;

        p,
        span {
          font-size: 14px;
        }
      }
    }
  }
`;
