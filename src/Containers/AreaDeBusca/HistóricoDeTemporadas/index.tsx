import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import { HistóricoDeTemporadasContainer } from "./style";

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
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.team?.name ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.league?.name ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.games
              ?.appearences || "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"green"}>
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.goals?.total ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.goals?.assists ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.games?.minutes ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"orange"}>
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.cards?.yellow ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"red"}>
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.cards?.red ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer23?.response?.[0]?.statistics?.[0]?.games?.rating
              ? Number(
                  searchPlayer23.response[0].statistics[0].games.rating
                ).toFixed(2)
              : "N/A"}
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
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.games
              ?.appearences || "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"green"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.goals?.total ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.goals?.assists ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.games?.minutes ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"orange"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.cards?.yellow ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"red"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.cards?.red ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer22?.response?.[0]?.statistics?.[0]?.games?.rating
              ? Number(
                  searchPlayer22.response[0].statistics[0].games.rating
                ).toFixed(2)
              : "N/A"}
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
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.games
              ?.appearences || "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"green"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.goals?.total ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.goals?.assists ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.games?.minutes ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"orange"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.cards?.yellow ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"red"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.cards?.red ||
              "N/A"}
          </ParagrafoEstilo>
          <ParagrafoEstilo $cor={"#F3F4F6"}>
            {searchPlayer21?.response?.[0]?.statistics?.[0]?.games?.rating
              ? Number(
                  searchPlayer21.response[0].statistics[0].games.rating
                ).toFixed(2)
              : "N/A"}
          </ParagrafoEstilo>
        </div>
      </div>
    </HistóricoDeTemporadasContainer>
  );
};
