import styled from "styled-components";

export const AreaTop10 = styled.section`
  margin-bottom: 30px;
  margin-top: 50px;

  .tituloTop10 {
    width: 100%;
    margin-top: 100px;
    text-align: center;
  }

  ul {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1%;
    row-gap: 30px;
    justify-content: center;

    li {
      list-style: none;
      background-color: #10192bff;
      border: 1px solid #ffffff14;
      border-radius: 15px;
      cursor: pointer;

      &:hover {
        border: 1px solid #3b82f6;
      }
      // Estilização da área 1 e área 2

      div.area1 {
        display: flex;
        width: 100%;
        padding: 10px;
        cursor: pointer;

        img {
          height: 70px;
          border: 1px solid #f3f4f6;
          border-radius: 12px;
          margin-right: 10px;
          object-fit: cover;
        }

        button {
          padding: 5px 20px;
          margin-left: auto;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }
      }

      div.area2 {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;

          span {
            color: gray;
            margin-bottom: 5px;
          }
        }
      }

      div.borda {
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 15px;
        border: 1px solid #f3f4f6;
        width: 90%;
      }

      div.area3 {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;

        span {
          color: gray;
          margin-bottom: 15px;
        }
      }
    }
  }
`;

export const SkeletonCard = styled.div`
  background-color: #10192bff;
  border: 1px solid #ffffff14;
  border-radius: 15px;
  padding: 10px;

  .skeleton-area1 {
    display: flex;
    align-items: center;
    gap: 10px;

    .skeleton-img {
      width: 70px;
      height: 70px;
      border-radius: 12px;
      background: linear-gradient(90deg, #1a2332 25%, #242d3f 50%, #1a2332 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }

    .skeleton-text {
      flex: 1;
      height: 20px;
      border-radius: 4px;
      background: linear-gradient(90deg, #1a2332 25%, #242d3f 50%, #1a2332 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }

    .skeleton-button {
      width: 100px;
      height: 30px;
      border-radius: 30px;
      background: linear-gradient(90deg, #1a2332 25%, #242d3f 50%, #1a2332 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
  }

  .skeleton-area2 {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    gap: 10px;

    .skeleton-stat {
      width: 60px;
      height: 40px;
      border-radius: 4px;
      background: linear-gradient(90deg, #1a2332 25%, #242d3f 50%, #1a2332 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
