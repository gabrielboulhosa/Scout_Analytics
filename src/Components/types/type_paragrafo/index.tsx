import { ParagrafoEstilo } from "./style";

export type paragrafo = {
  texto?: React.ReactNode;
  $cor?: string | number;
  $fonte?: number;
};

export const Paragrafo = (paragrafo: paragrafo) => {
  return <ParagrafoEstilo texto={paragrafo.texto}></ParagrafoEstilo>;
};
