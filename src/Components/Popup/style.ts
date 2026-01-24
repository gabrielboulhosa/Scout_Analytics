import styled from "styled-components";

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-family: "Inter", sans-serif;
`;

export const PopupContainer = styled.div`
  background-color: rgb(13, 19, 32);
  border: 1px solid #f3f4f6;
  border-radius: 6px;
  padding: 28px;
  max-width: 380px;
`;

export const PopupContent = styled.p`
  color: #f3f4f6;
  font-size: 15px;
  margin-bottom: 24px;
  text-align: center;
  line-height: 1.5;
  font-weight: 500;
`;

export const PopupButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: #3b82f6;
  color: #f3f4f6;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Inter", sans-serif;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }
`;
