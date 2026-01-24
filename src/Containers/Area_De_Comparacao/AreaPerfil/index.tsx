import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import { AreaComparacaoContainer, AreaComparacaoInfo } from "./style";

type AreaComparacaoProps = {
  playerInfos1: ApiResponse | undefined;
  playerInfos2: ApiResponse | undefined;
};

export const AreaComparacao = ({
  playerInfos1,
  playerInfos2,
}: AreaComparacaoProps) => {
  // Validação: verificar se os dados existem
  if (
    !playerInfos1?.response?.[0] ||
    !playerInfos2?.response?.[0] ||
    !playerInfos1?.response?.[0]?.statistics?.[0] ||
    !playerInfos2?.response?.[0]?.statistics?.[0]
  ) {
    return null;
  }

  return (
    <>
      <AreaComparacaoContainer>
        <AreaComparacaoInfo>
          <div className="areaComparacaoImg">
            <img
              src={playerInfos1?.response[0].player.photo}
              alt="foto do jogador"
            />
          </div>
          <div className="areaComparacaoInfoText">
            <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
              {playerInfos1?.response[0].player.name}
            </ParagrafoEstilo>
            <h3>{playerInfos1?.response[0].statistics[0].team.name}</h3>
          </div>
        </AreaComparacaoInfo>

        <div className="areaCentral">
          <span>VS</span>
        </div>

        <AreaComparacaoInfo>
          <div className="areaComparacaoImg">
            <img
              src={playerInfos2?.response[0].player.photo}
              alt="foto do jogador"
            />
          </div>
          <div className="areaComparacaoInfoText">
            <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
              {playerInfos2?.response[0].player.name}
            </ParagrafoEstilo>
            <h3>{playerInfos2?.response[0].statistics[0].team.name}</h3>
          </div>
        </AreaComparacaoInfo>
      </AreaComparacaoContainer>
    </>
  );
};
