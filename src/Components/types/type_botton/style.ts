import styled from "styled-components";
import { type botao } from "../type_botton/index";

export const BotaoEstilizado = styled.button<botao>`
  background-color: ${(props) => props.$cor};
  color: ${(props) => props.$color};
  height: 30px;

  &:hover {
    background-color: ${(props) => props.$hover};
    color: #f3f4f6;
  }
`;
