import styled from "styled-components";

export const StyleIdentidadeJogador = styled.section`
  width: 100%;
  display: flex;
  padding: 20px;
  background-color: #10192bff;
  border: 1px solid #ffffff14;
  border-radius: 12px;
  margin: 20px 0;

  .player-image {
    position: relative;
    margin-right: 20px;
    border: 1px solid #f3f4f6;
    border-radius: 12px;

    img {
      width: 120px;
      height: 120px;
      border-radius: 12px;
      object-fit: cover;
    }

    .number {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #3b82f6;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
    }
  }

  .player-info {
    flex: 1;

    p {
      margin: 0 0 5px 0;
      color: gray;
    }

    .full-name {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .details {
      display: flex;
      gap: 40px;
      justify-content: space-between;
      width: 95%;

      .detail-item {
        display: flex;
        flex-direction: column;
      }

      span {
        font-size: 14px;
        color: gray;
        margin-bottom: 5px;
      }
    }
  }

  .position-badge {
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 766px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;

    .player-image {
      margin-right: 0;
      margin-bottom: 12px;

      img {
        width: 140px;
        height: 140px;
      }

      .number {
        bottom: -8px;
      }
    }

    .player-info {
      width: 100%;
      text-align: center;

      .full-name {
        font-size: 18px;
        margin-bottom: 12px;
      }

      .details {
        flex-direction: column;
        gap: 12px;
        width: 100%;
        align-items: center;
      }

      p,
      span {
        text-align: center;
      }
    }

    .position-badge {
      margin-top: 12px;
      align-self: center;
      padding: 6px 14px;
    }
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    .player-image {
      height: 140px;
      img {
        width: 120px;
        height: 140px;
        border-radius: 12px;
        object-fit: cover;
      }
    }
  }
`;
