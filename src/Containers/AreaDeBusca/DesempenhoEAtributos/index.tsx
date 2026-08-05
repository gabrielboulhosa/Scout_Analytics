import SimpleRadarChart from "../../../Components/GraficoAtributos";
import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import {
  AsideAtributosContainer,
  MainContainer,
  SectionDesempenhoContainer,
} from "./Style";

type DesempenhoEAtributos = {
  searchPlayer: ApiResponse[] | undefined;
};

export const DesempenhoEAtributos = ({
  searchPlayer,
}: DesempenhoEAtributos) => {
  const s1 = searchPlayer?.[0]?.response?.[0]?.statistics?.[0];
  const s2 = searchPlayer?.[1]?.response?.[0]?.statistics?.[0];
  const s3 = searchPlayer?.[2]?.response?.[0]?.statistics?.[0];
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
              {s1?.games.rating ? Number(s1.games.rating).toFixed(1) : "N/A"}
            </ParagrafoEstilo>
            <span>Média por Partida</span>
          </li>
          <li>
            <span>Gols</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {s1?.goals.total || 0}
            </ParagrafoEstilo>
            <span>xG: 14.8</span>
          </li>
          <li>
            <span>Assistências</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {s1?.goals.assists || 0}
            </ParagrafoEstilo>
            <span>xA: 1.2</span>
          </li>
          <li>
            <span>Partidas</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {s1?.games.appearences || 0}
            </ParagrafoEstilo>
            <span>{s1?.games.minutes || 0}: jogados</span>
          </li>
          <li>
            <span>Passes</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {s1?.passes.total || 0}
            </ParagrafoEstilo>
          </li>
          <li>
            <span>Cond. Progressivas</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {s1?.passes.key || 0}%
            </ParagrafoEstilo>
          </li>
          <li>
            <span>Duelos</span>
            <ParagrafoEstilo $fonte={30} $cor={"#F3F4F6"}>
              {s1?.duels.won || 0}
            </ParagrafoEstilo>
          </li>
        </ul>
      </SectionDesempenhoContainer>
      {/* Perfil de Atributos */}
      <AsideAtributosContainer>
        <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
          Historico de Atributos
        </ParagrafoEstilo>
        <SimpleRadarChart
          temporada1={{
            atributo1: Number(s1?.duels.total || 0),
            atributo2: Number(s1?.dribbles.attempts || 0),
            atributo3: Number(s1?.passes.total || 0),
            atributo4: Number(s1?.dribbles.attempts) || 0,
            atributo5:
              Number(s1?.tackles.total || 0) +
              Number(s1?.tackles.interceptions || 0),
            atributo6: Number(s1?.passes.total || 0),
          }}
          temporada2={{
            atributoT2_1: Number(s2?.duels.total || 0),
            atributoT2_2: Number(s2?.dribbles.attempts || 0),
            atributoT2_3: Number(s2?.passes.total || 0),
            atributoT2_4: Number(s2?.duels.total || 0),
            atributoT2_5:
              Number(s2?.tackles.total || 0) +
              Number(s2?.tackles.interceptions || 0),
            atributoT2_6: Number(s2?.passes.total || 0),
          }}
          temporada3={{
            atributoT3_1: Number(s3?.duels.total || 0),
            atributoT3_2: Number(s3?.dribbles.attempts || 0),
            atributoT3_3: Number(s3?.passes.total || 0),
            atributoT3_4: Number(s3?.duels.total || 0),
            atributoT3_5:
              Number(s3?.tackles.total || 0) +
              Number(s3?.tackles.interceptions || 0),
            atributoT3_6: Number(s3?.passes.total || 0),
          }}
        />
      </AsideAtributosContainer>
    </MainContainer>
  );
};
