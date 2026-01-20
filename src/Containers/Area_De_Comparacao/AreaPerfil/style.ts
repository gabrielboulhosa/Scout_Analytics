import styled from "styled-components";

export const AreaPerfilContainer = styled.main`
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

  .areaCentral {
    span {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export const AreaPerfilInfo = styled.section`
  text-align: center;
  padding: 10px 10px;
  .areaPerfilImg {
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid #f3f4f6;
    }
  }

  .areaPerfilInfoText {
  padding-top: 10px;
  
  } 
    h3 {
      color: gray;
      padding: 10px 0;
    }
  }

  .areaCentral {
    span {
      font-size: 24px;
      font-weight: bold;
      color: #f3f4f6;
    }
  }
`;
