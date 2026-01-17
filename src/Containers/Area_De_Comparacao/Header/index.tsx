import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import { HeaderContainer } from "./style";

export const HeaderArea = () => {
  return (
    <>
      <HeaderContainer>
        <ParagrafoEstilo $fonte={24} $cor={"#F3F4F6"}>
          Comparação de Jogadores
        </ParagrafoEstilo>
        <span>x</span>
      </HeaderContainer>
      ;
    </>
  );
};
