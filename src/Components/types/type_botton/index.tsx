import { BotaoEstilizado } from "./style";

export type botao = {
  $texto?: React.ReactNode;
  $cor: string | number;
  $color?: string | number;
  $hover?: string | number;
};

export const Botoes = (botao: botao) => {
  return <BotaoEstilizado $cor={botao.$cor}></BotaoEstilizado>;
};
