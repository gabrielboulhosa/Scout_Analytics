import styled from "styled-components";
import { type botao } from "../type_botton/index";

export const BotaoEstilizado = styled.button<botao>`
  background-color: ${(props) => props.$cor};
  height: 30px;
`;
