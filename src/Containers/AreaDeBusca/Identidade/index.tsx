import { BotaoEstilizado } from "../../../Components/types/type_botton/style";
import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import { StyleIdentidadeJogador } from "./style";

type identidade = {
  searchPlayer: ApiResponse | undefined;
};

export const IdentidadeJogador = ({ searchPlayer }: identidade) => {
  if (
    !searchPlayer ||
    !searchPlayer.response ||
    searchPlayer.response.length === 0
  ) {
    return <div>Limite de API atingido ou jogador não encontrado</div>;
  }
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

      <BotaoEstilizado className="position-badge" $cor={"#3b82f6"}>
        Comparar
      </BotaoEstilizado>
    </StyleIdentidadeJogador>
  );
};
