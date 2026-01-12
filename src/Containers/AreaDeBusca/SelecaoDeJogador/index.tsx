import { useDispatch } from "react-redux";
import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import { SelecaoDeJogadorContainer } from "./style";
import { atualizaId } from "../../../store/formSlice";

type Jogador = {
  searchPlayer: ApiResponse | undefined;
};

export const SelecaoDeJogador = ({ searchPlayer }: Jogador) => {
  const dispatch = useDispatch();
  return (
    <>
      <SelecaoDeJogadorContainer>
        <div className="selecaoTexto">
          <ParagrafoEstilo $fonte={32} $cor={"#F3F4F6"}>
            Selecione o jogador que desejar:
          </ParagrafoEstilo>
        </div>
        <ul>
          {searchPlayer?.response.map((item) => (
            <li
              key={item.player.id}
              onClick={() => dispatch(atualizaId(item.player.id))}
            >
              <img
                src={item.player.photo}
                alt="foto do jogador para selecionar"
              />
            </li>
          ))}
        </ul>
      </SelecaoDeJogadorContainer>
    </>
  );
};
