import styled from "styled-components";
import { type paragrafo } from "../type_paragrafo/index";

export const ParagrafoEstilo = styled.p<paragrafo>`
  color: ${(props) => props.$cor};
  font-size: ${(props) => (props.$fonte ? `${props.$fonte}px` : "16px")};
  font-weight: bold;
`;
