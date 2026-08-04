import SimpleRadarChart from "../../../Components/GraficoAtributos";
import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import {
  AsideAtributosContainer,
  MainContainer,
  SectionDesempenhoContainer,
} from "./Style";

type DesempenhoEAtributos = {
  searchPlayer: ApiResponse | undefined;
};

export const DesempenhoEAtributos = ({
  searchPlayer,
}: DesempenhoEAtributos) => {
  return (
    <MainContainer>
      {/* Desempenho da Temporada */}
      <SectionDesempenhoContainer>
        <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
          Desempenho da Temporada
        </ParagrafoEstilo>
        <ul>
          <li>
            <span>Rating</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {searchPlayer?.response[0].statistics[0].games.rating
                ? Number(
                    searchPlayer.response[0].statistics[0].games.rating,
                  ).toFixed(1)
                : "N/A"}
            </ParagrafoEstilo>
            <span>Média por Partida</span>
          </li>
          <li>
            <span>Gols</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {searchPlayer?.response[0].statistics[0].goals.total || 0}
            </ParagrafoEstilo>
            <span>xG: 14.8</span>
          </li>
          <li>
            <span>Assistências</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {searchPlayer?.response[0].statistics[0].goals.assists || 0}
            </ParagrafoEstilo>
            <span>xA: 1.2</span>
          </li>
          <li>
            <span>Partidas</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {searchPlayer?.response[0].statistics[0].games.appearences || 0}
            </ParagrafoEstilo>
            <span>
              {searchPlayer?.response[0].statistics[0].games.minutes || 0}:
              jogados
            </span>
          </li>
          <li>
            <span>Passes</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {searchPlayer?.response[0].statistics[0].passes.total || 0}
            </ParagrafoEstilo>
          </li>
          <li>
            <span>Cond. Progressivas</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {searchPlayer?.response[0].statistics[0].passes.key || 0}%
            </ParagrafoEstilo>
          </li>
          <li>
            <span>Duelos</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {searchPlayer?.response[0].statistics[0].duels.won || 0}
            </ParagrafoEstilo>
          </li>
        </ul>
      </SectionDesempenhoContainer>
      {/* Perfil de Atributos */}
      <AsideAtributosContainer>
        <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
          Perfil de Atributos
        </ParagrafoEstilo>
        <SimpleRadarChart />
      </AsideAtributosContainer>
    </MainContainer>
  );
};
