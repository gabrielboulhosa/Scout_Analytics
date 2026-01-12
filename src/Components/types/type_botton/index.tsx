import { BotaoEstilizado } from "./style";

export type botao = {
  $texto?: React.ReactNode;
  $cor: string | number;
};

export const Botoes = (botao: botao) => {
  return <BotaoEstilizado $cor={botao.$cor}></BotaoEstilizado>;
};
