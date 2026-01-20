import { useDispatch } from "react-redux";
import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import { HeaderContainer } from "./style";
import { limparIdComparar } from "../../../store/formSlice";

export const HeaderArea = () => {
  const dispatch = useDispatch();
  return (
    <>
      <HeaderContainer>
        <ParagrafoEstilo $fonte={24} $cor={"#F3F4F6"}>
          Comparação de Jogadores
        </ParagrafoEstilo>
        <span onClick={() => dispatch(limparIdComparar())}>x</span>
      </HeaderContainer>
    </>
  );
};
