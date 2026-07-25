import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import { HistóricoDeTemporadasContainer } from "./style";
import type { Tipo_HistóricoTemporada } from "../../../Components/types/type_HistoricoTemporada";

type HistóricoDeTemporadas = {
  searchPlayer23: ApiResponse | undefined;
  searchPlayer22: ApiResponse | undefined;
  searchPlayer21: ApiResponse | undefined;
};

export const HistóricoDeTemporadas = ({
  searchPlayer23,
  searchPlayer22,
  searchPlayer21,
}: HistóricoDeTemporadas) => {
  const temporadas: Tipo_HistóricoTemporada = {
    temporada1: {
      temporada: "2023/24",
      clube:
        searchPlayer23?.response?.[0]?.statistics?.[0]?.team?.name || "N/A",
      liga:
        searchPlayer23?.response?.[0]?.statistics?.[0]?.league?.name || "N/A",
      jogos:
        Number(
          searchPlayer23?.response?.[0]?.statistics?.[0]?.games?.appearences,
        ) || 0,
      gols:
        Number(searchPlayer23?.response?.[0]?.statistics?.[0]?.goals?.total) ||
        0,
      assistencias:
        Number(
          searchPlayer23?.response?.[0]?.statistics?.[0]?.goals?.assists,
        ) || 0,
      minutos:
        Number(
          searchPlayer23?.response?.[0]?.statistics?.[0]?.games?.minutes,
        ) || 0,
      cartoesAmarelos:
        Number(searchPlayer23?.response?.[0]?.statistics?.[0]?.cards?.yellow) ||
        0,
      cartoesVermelhos:
        Number(searchPlayer23?.response?.[0]?.statistics?.[0]?.cards?.red) || 0,
      golsPorJogo: searchPlayer23?.response?.[0]?.statistics?.[0]?.games?.rating
        ? parseFloat(
            Number(
              searchPlayer23.response[0].statistics[0].games.rating,
            ).toFixed(2),
          )
        : 0,
    },
    temporada2: {
      temporada: "2022/23",
      clube:
        searchPlayer22?.response?.[0]?.statistics?.[0]?.team?.name || "N/A",
      liga:
        searchPlayer22?.response?.[0]?.statistics?.[0]?.league?.name || "N/A",
      jogos:
        Number(
          searchPlayer22?.response?.[0]?.statistics?.[0]?.games?.appearences,
        ) || 0,
      gols:
        Number(searchPlayer22?.response?.[0]?.statistics?.[0]?.goals?.total) ||
        0,
      assistencias:
        Number(
          searchPlayer22?.response?.[0]?.statistics?.[0]?.goals?.assists,
        ) || 0,
      minutos:
        Number(
          searchPlayer22?.response?.[0]?.statistics?.[0]?.games?.minutes,
        ) || 0,
      cartoesAmarelos:
        Number(searchPlayer22?.response?.[0]?.statistics?.[0]?.cards?.yellow) ||
        0,
      cartoesVermelhos:
        Number(searchPlayer22?.response?.[0]?.statistics?.[0]?.cards?.red) || 0,
      golsPorJogo: searchPlayer22?.response?.[0]?.statistics?.[0]?.games?.rating
        ? parseFloat(
            Number(
              searchPlayer22.response[0].statistics[0].games.rating,
            ).toFixed(2),
          )
        : 0,
    },
    temporada3: {
      temporada: "2021/22",
      clube:
        searchPlayer21?.response?.[0]?.statistics?.[0]?.team?.name || "N/A",
      liga:
        searchPlayer21?.response?.[0]?.statistics?.[0]?.league?.name || "N/A",
      jogos:
        Number(
          searchPlayer21?.response?.[0]?.statistics?.[0]?.games?.appearences,
        ) || 0,
      gols:
        Number(searchPlayer21?.response?.[0]?.statistics?.[0]?.goals?.total) ||
        0,
      assistencias:
        Number(
          searchPlayer21?.response?.[0]?.statistics?.[0]?.goals?.assists,
        ) || 0,
      minutos:
        Number(
          searchPlayer21?.response?.[0]?.statistics?.[0]?.games?.minutes,
        ) || 0,
      cartoesAmarelos:
        Number(searchPlayer21?.response?.[0]?.statistics?.[0]?.cards?.yellow) ||
        0,
      cartoesVermelhos:
        Number(searchPlayer21?.response?.[0]?.statistics?.[0]?.cards?.red) || 0,
      golsPorJogo: searchPlayer21?.response?.[0]?.statistics?.[0]?.games?.rating
        ? parseFloat(
            Number(
              searchPlayer21.response[0].statistics[0].games.rating,
            ).toFixed(2),
          )
        : 0,
    },
  };

  return (
    <HistóricoDeTemporadasContainer>
      <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
        Histórico de Temporadas
      </ParagrafoEstilo>
      <div className="históricodeTemporadasInfo">
        <div className="históricodeTemporadasDados">
          <ParagrafoEstilo $cor={"gray"}>Temporada</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>Clube</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>Liga</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>J</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>G</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>A</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>Min</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>CA</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>CV</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"gray"}>G/J</ParagrafoEstilo>
        </div>

        <div className="históricodeTemporadasDados">
          <ParagrafoEstilo $cor={"#F3F4F6"}>2023/24</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {temporadas.temporada1.clube}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {temporadas.temporada1.liga}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada1.jogos >= temporadas.temporada2.jogos &&
              temporadas.temporada1.jogos >= temporadas.temporada3.jogos
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada1.jogos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada1.gols >= temporadas.temporada2.gols &&
              temporadas.temporada1.gols >= temporadas.temporada3.gols
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada1.gols}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada1.assistencias >=
                temporadas.temporada2.assistencias &&
              temporadas.temporada1.assistencias >=
                temporadas.temporada3.assistencias
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada1.assistencias}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada1.minutos >= temporadas.temporada2.minutos &&
              temporadas.temporada1.minutos >= temporadas.temporada3.minutos
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada1.minutos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada1.cartoesAmarelos >=
                temporadas.temporada2.cartoesAmarelos &&
              temporadas.temporada1.cartoesAmarelos >=
                temporadas.temporada3.cartoesAmarelos
                ? "orange"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada1.cartoesAmarelos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada1.cartoesVermelhos >=
                temporadas.temporada2.cartoesVermelhos &&
              temporadas.temporada1.cartoesVermelhos >=
                temporadas.temporada3.cartoesVermelhos
                ? "red"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada1.cartoesVermelhos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada1.golsPorJogo >=
                temporadas.temporada2.golsPorJogo &&
              temporadas.temporada1.golsPorJogo >=
                temporadas.temporada3.golsPorJogo
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada1.golsPorJogo}
          </ParagrafoEstilo>
        </div>

        <div className="históricodeTemporadasDados">
          <ParagrafoEstilo $cor={"#F3F4F6"}>2022/23</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.team?.name ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.league?.name ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada2.jogos >= temporadas.temporada1.jogos &&
              temporadas.temporada2.jogos >= temporadas.temporada3.jogos
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada2.jogos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada2.gols >= temporadas.temporada1.gols &&
              temporadas.temporada2.gols >= temporadas.temporada3.gols
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada2.gols}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada2.assistencias >=
                temporadas.temporada1.assistencias &&
              temporadas.temporada2.assistencias >=
                temporadas.temporada3.assistencias
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada2.assistencias}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada2.minutos >= temporadas.temporada1.minutos &&
              temporadas.temporada2.minutos >= temporadas.temporada3.minutos
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada2.minutos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada2.cartoesAmarelos >=
                temporadas.temporada1.cartoesAmarelos &&
              temporadas.temporada2.cartoesAmarelos >=
                temporadas.temporada3.cartoesAmarelos
                ? "orange"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada2.cartoesAmarelos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada2.cartoesVermelhos >=
                temporadas.temporada1.cartoesVermelhos &&
              temporadas.temporada2.cartoesVermelhos >=
                temporadas.temporada3.cartoesVermelhos
                ? "red"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada2.cartoesVermelhos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada2.golsPorJogo >=
                temporadas.temporada1.golsPorJogo &&
              temporadas.temporada2.golsPorJogo >=
                temporadas.temporada3.golsPorJogo
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada2.golsPorJogo}
          </ParagrafoEstilo>
        </div>
        <div className="históricodeTemporadasDados">
          <ParagrafoEstilo $cor={"#F3F4F6"}>2021/22</ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.team?.name ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.league?.name ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada3.jogos >= temporadas.temporada1.jogos &&
              temporadas.temporada3.jogos >= temporadas.temporada2.jogos
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada3.jogos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada3.gols >= temporadas.temporada1.gols &&
              temporadas.temporada3.gols >= temporadas.temporada2.gols
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada3.gols}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada3.assistencias >=
                temporadas.temporada1.assistencias &&
              temporadas.temporada3.assistencias >=
                temporadas.temporada2.assistencias
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada3.assistencias}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada3.minutos >= temporadas.temporada1.minutos &&
              temporadas.temporada3.minutos >= temporadas.temporada2.minutos
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada3.minutos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada3.cartoesAmarelos >=
                temporadas.temporada1.cartoesAmarelos &&
              temporadas.temporada3.cartoesAmarelos >=
                temporadas.temporada2.cartoesAmarelos
                ? "orange"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada3.cartoesAmarelos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada3.cartoesVermelhos >=
                temporadas.temporada1.cartoesVermelhos &&
              temporadas.temporada3.cartoesVermelhos >=
                temporadas.temporada2.cartoesVermelhos
                ? "red"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada3.cartoesVermelhos}
          </ParagrafoEstilo>
          <ParagrafoEstilo
            $cor={
              temporadas.temporada3.golsPorJogo >=
                temporadas.temporada1.golsPorJogo &&
              temporadas.temporada3.golsPorJogo >=
                temporadas.temporada2.golsPorJogo
                ? "green"
                : "#F3F4F6"
            }
          >
            {temporadas.temporada3.golsPorJogo}
          </ParagrafoEstilo>
        </div>
      </div>
    </HistóricoDeTemporadasContainer>
  );
};
