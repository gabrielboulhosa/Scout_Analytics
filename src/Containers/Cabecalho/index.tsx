import { useDispatch, useSelector } from "react-redux";
import { CabecalhoContainer } from "./style";
import type { RootState } from "../../store/store";
import { atualizaTexto } from "../../store/formSlice";

type Props = {
  onSubmit?: (e: React.FormEvent) => void;
  onClick?: () => void;
};

export function Cabecalho(Props: Props) {
  const texto = useSelector((state: RootState) => state.form.texto);
  const dispatch = useDispatch();
  return (
    <header>
      <CabecalhoContainer>
        <h3>Scout</h3>

        <form onSubmit={Props.onSubmit}>
          <input
            type="text"
            placeholder="Buscar jogador..."
            value={texto}
            onChange={(e) => dispatch(atualizaTexto(e.target.value))}
          />
          <button type="submit">
            <i className="fi fi-rr-search"></i>
          </button>
        </form>
      </CabecalhoContainer>
    </header>
  );
}
