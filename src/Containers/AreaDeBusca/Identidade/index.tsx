import { useDispatch, useSelector } from "react-redux";
import { BotaoEstilizado } from "../../../Components/types/type_botton/style";
import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import type { RootState } from "../../../store/store";
import { StyleIdentidadeJogador } from "./style";
import { atualizaIdComparar } from "../../../store/formSlice";

type identidade = {
  searchPlayer: ApiResponse | undefined;
};

export const IdentidadeJogador = ({ searchPlayer }: identidade) => {
  const idComparar = useSelector((state: RootState) => state.form.idComparar);
  const dispatchIdComparar = useDispatch();

  if (
    !searchPlayer ||
    !searchPlayer.response ||
    searchPlayer.response.length === 0
  ) {
    return <div>Limite de API atingido ou jogador não encontrado</div>;
  }

  console.log(idComparar);

  const eValido = idComparar.includes(searchPlayer.response[0].player.id);
  return (
    <StyleIdentidadeJogador>
      <div className="player-image">
        <img src={searchPlayer.response[0].player.photo} alt="Erling Haaland" />
      </div>

      <div className="player-info">
        <ParagrafoEstilo $fonte={32} $cor={"#F3F4F6"}>
          {searchPlayer.response[0].player.name}
        </ParagrafoEstilo>
        <p className="full-name">
          {searchPlayer.response[0].player.name &&
            searchPlayer.response[0].player.firstname}
        </p>

        <div className="details">
          <div className="detail-item">
            <span> 🏳️ Nacionalidade</span>
            <ParagrafoEstilo $fonte={17} $cor={"#F3F4F6"}>
              {searchPlayer.response[0].player.nationality}
            </ParagrafoEstilo>
          </div>
          <div className="detail-item">
            <span> ⚽ Clube</span>
            <ParagrafoEstilo $fonte={17} $cor={"#F3F4F6"}>
              {searchPlayer.response[0].statistics[0].team.name}
            </ParagrafoEstilo>
          </div>
          <div className="detail-item">
            <span> 📅 Idade</span>
            <ParagrafoEstilo $fonte={17} $cor={"#F3F4F6"}>
              {searchPlayer.response[0].player.age} anos
            </ParagrafoEstilo>
          </div>
          <div className="detail-item">
            <span> 📏 Altura</span>
            <ParagrafoEstilo $fonte={17} $cor={"#F3F4F6"}>
              {searchPlayer.response[0].player.height} cm
            </ParagrafoEstilo>
          </div>
        </div>
      </div>

      <BotaoEstilizado
        className="position-badge"
        $cor={eValido ? "green" : "#3b82f6"}
        onClick={() => {
          if (idComparar.length < 1) {
            alert("adicione pelo menos dois jogadores para comparação!");
          }

          dispatchIdComparar(
            atualizaIdComparar(Number(searchPlayer.response[0].player.id))
          );
        }}
      >
        {eValido ? "Adicionado" : "Comparar"}
      </BotaoEstilizado>
    </StyleIdentidadeJogador>
  );
};
