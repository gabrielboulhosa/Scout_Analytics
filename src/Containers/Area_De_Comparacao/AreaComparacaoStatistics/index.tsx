import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import type { ComparacaoPlayers } from "../../../Components/types/type_comparacaoPlayer";
import {
  AreaComparacaoStatisticsContainer,
  AreaComparacaoStatisticsInfoPlayers,
} from "./style";

type AreaComparacaoStatisticsProps = {
  playerInfos1: ApiResponse | undefined;
  playerInfos2: ApiResponse | undefined;
};

export const AreaComparacaoStatistics = ({
  playerInfos1,
  playerInfos2,
}: AreaComparacaoStatisticsProps) => {
  // Validação: verificar se os dados existem antes de usar
  if (
    !playerInfos1?.response?.[0] ||
    !playerInfos2?.response?.[0] ||
    !playerInfos1?.response?.[0]?.statistics?.[0] ||
    !playerInfos2?.response?.[0]?.statistics?.[0]
  ) {
    return (
      <div style={{ color: "#fff", textAlign: "center", padding: "20px" }}>
        <h2>Dados insuficientes para comparação</h2>
        <p>Selecione dois jogadores válidos para comparar.</p>
      </div>
    );
  }

  const statsPlayer: ComparacaoPlayers = {
    Player1: {
      peso: Number(playerInfos1?.response[0].player.weight) || 0,
      altura: Number(playerInfos1?.response[0].player.height) || 0,
      idade: Number(playerInfos1?.response[0].player.age) || 0,
      jogos:
        Number(playerInfos1?.response[0].statistics[0].games.appearences) || 0,
      gols: Number(playerInfos1?.response[0].statistics[0].goals.total) || 0,
      Assistências:
        Number(playerInfos1?.response[0].statistics[0].goals.assists) || 0,
      minutos:
        Number(playerInfos1?.response[0].statistics[0].games.minutes) || 0,
      golsPorJogo:
        Number(playerInfos1?.response[0].statistics[0].games.rating) || 0,
      cartoesAmarelos:
        Number(playerInfos1?.response[0].statistics[0].cards.yellow) || 0,
      cartoesVermelhos:
        Number(playerInfos1?.response[0].statistics[0].cards.red) || 0,
    },
    Player2: {
      peso: Number(playerInfos2?.response[0].player.weight) || 0,
      altura: Number(playerInfos2?.response[0].player.height) || 0,
      idade: Number(playerInfos2?.response[0].player.age) || 0,
      jogos:
        Number(playerInfos2?.response[0].statistics[0].games.appearences) || 0,
      gols: Number(playerInfos2?.response[0].statistics[0].goals.total) || 0,
      Assistências:
        Number(playerInfos2?.response[0].statistics[0].goals.assists) || 0,
      minutos:
        Number(playerInfos2?.response[0].statistics[0].games.minutes) || 0,
      golsPorJogo:
        Number(playerInfos2?.response[0].statistics[0].games.rating) || 0,
      cartoesAmarelos:
        Number(playerInfos2?.response[0].statistics[0].cards.yellow) || 0,
      cartoesVermelhos:
        Number(playerInfos2?.response[0].statistics[0].cards.red) || 0,
    },
  };

  return (
    <>
      <AreaComparacaoStatisticsContainer>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.peso > statsPlayer.Player2.peso
                ? "green"
                : statsPlayer.Player1.peso <= statsPlayer.Player2.peso
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.peso}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>Peso (kg)</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.peso > statsPlayer.Player1.peso
                ? "green"
                : statsPlayer.Player2.peso <= statsPlayer.Player1.peso
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.peso}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Area de altura */}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.altura > statsPlayer.Player2.altura
                ? "green"
                : statsPlayer.Player1.altura <= statsPlayer.Player2.altura
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.altura}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>Altura (cm)</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.altura > statsPlayer.Player1.altura
                ? "green"
                : statsPlayer.Player2.altura <= statsPlayer.Player1.altura
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.altura}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Area de idade*/}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.idade < statsPlayer.Player2.idade
                ? "green"
                : statsPlayer.Player1.idade >= statsPlayer.Player2.idade
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.idade}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>Idade</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.idade < statsPlayer.Player1.idade
                ? "green"
                : statsPlayer.Player2.idade >= statsPlayer.Player1.idade
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.idade}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Area de jogos*/}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.jogos > statsPlayer.Player2.jogos
                ? "green"
                : statsPlayer.Player1.jogos <= statsPlayer.Player2.jogos
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.jogos}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>Jogos</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.jogos > statsPlayer.Player1.jogos
                ? "green"
                : statsPlayer.Player2.jogos <= statsPlayer.Player1.jogos
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.jogos}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Espaço dos gols */}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.gols > statsPlayer.Player2.gols
                ? "green"
                : statsPlayer.Player1.gols <= statsPlayer.Player2.gols
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.gols}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>Gols</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.gols > statsPlayer.Player1.gols
                ? "green"
                : statsPlayer.Player2.gols <= statsPlayer.Player1.gols
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.gols}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Espaço das assistências */}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.Assistências >
              statsPlayer.Player2.Assistências
                ? "green"
                : statsPlayer.Player1.Assistências <=
                    statsPlayer.Player2.Assistências
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.Assistências}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>Assistências</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.Assistências >
              statsPlayer.Player1.Assistências
                ? "green"
                : statsPlayer.Player2.Assistências <=
                    statsPlayer.Player1.Assistências
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.Assistências}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Espaço dos minutos */}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.minutos > statsPlayer.Player2.minutos
                ? "green"
                : statsPlayer.Player1.minutos <= statsPlayer.Player2.minutos
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.minutos}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>Minutos</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.minutos > statsPlayer.Player1.minutos
                ? "green"
                : statsPlayer.Player2.minutos <= statsPlayer.Player1.minutos
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.minutos}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Espaço dos gols por jogo */}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.golsPorJogo > statsPlayer.Player2.golsPorJogo
                ? "green"
                : statsPlayer.Player1.golsPorJogo <=
                    statsPlayer.Player2.golsPorJogo
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.golsPorJogo.toFixed(2)}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>Gols/Jogo</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.golsPorJogo > statsPlayer.Player1.golsPorJogo
                ? "green"
                : statsPlayer.Player2.golsPorJogo <=
                    statsPlayer.Player1.golsPorJogo
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.golsPorJogo.toFixed(2)}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Espaço dos cartões amarelos */}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.cartoesAmarelos <
              statsPlayer.Player2.cartoesAmarelos
                ? "green"
                : statsPlayer.Player2.cartoesAmarelos >=
                    statsPlayer.Player1.cartoesAmarelos
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.cartoesAmarelos}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>C. Amarelos</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.cartoesAmarelos <
              statsPlayer.Player1.cartoesAmarelos
                ? "green"
                : statsPlayer.Player2.cartoesAmarelos >=
                    statsPlayer.Player1.cartoesAmarelos
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.cartoesAmarelos}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        {/* Espaço dos cartões vermelhos */}
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player1.cartoesVermelhos <
              statsPlayer.Player2.cartoesVermelhos
                ? "green"
                : statsPlayer.Player2.cartoesVermelhos >=
                    statsPlayer.Player1.cartoesVermelhos
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player1.cartoesVermelhos}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
        <div className="areaCentra2">
          <span>C. Vermelhos</span>
        </div>
        <AreaComparacaoStatisticsInfoPlayers>
          <ParagrafoEstilo
            $fonte={20}
            $cor={
              statsPlayer.Player2.cartoesVermelhos <
              statsPlayer.Player1.cartoesVermelhos
                ? "green"
                : statsPlayer.Player2.cartoesVermelhos >=
                    statsPlayer.Player1.cartoesVermelhos
                  ? "#F3F4F6"
                  : "#F3F4F6"
            }
          >
            {statsPlayer.Player2.cartoesVermelhos}
          </ParagrafoEstilo>
        </AreaComparacaoStatisticsInfoPlayers>
      </AreaComparacaoStatisticsContainer>
    </>
  );
};
