import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";
import { AreaPerfilContainer, AreaPerfilInfo } from "./style";

type AreaPerfilProps = {
  player1: ApiResponse | undefined;
  player2: ApiResponse | undefined;
};

export const AreaPerfil = ({ player1, player2 }: AreaPerfilProps) => {
  return (
    <>
      <AreaPerfilContainer>
        <AreaPerfilInfo>
          <div className="areaPerfilImg">
            <img
              src={player1?.response[0].player.photo}
              alt="foto do jogador"
            />
          </div>
          <div className="areaPerfilInfoText">
            <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
              {player1?.response[0].player.name}
            </ParagrafoEstilo>
            <h3>{player1?.response[0].statistics[0].team.name}</h3>
          </div>
        </AreaPerfilInfo>

        <div className="areaCentral">
          <span>VS</span>
        </div>

        <AreaPerfilInfo>
          <div className="areaPerfilImg">
            <img
              src={player2?.response[0].player.photo}
              alt="foto do jogador"
            />
          </div>
          <div className="areaPerfilInfoText">
            <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
              {player2?.response[0].player.name}
            </ParagrafoEstilo>
            <h3>{player2?.response[0].statistics[0].team.name}</h3>
          </div>
        </AreaPerfilInfo>
      </AreaPerfilContainer>
    </>
  );
};
