import { RatingChart } from "../../../Components/GraficoPrograssao1";
import { GoalsChart } from "../../../Components/GraficoPrograssao2";
import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import type { ApiResponse } from "../../../Components/types/type_players";

import { MainContainer } from "../DesempenhoEAtributos/Style";
import { AsideDefensivoContainer, SectionProgressaoContainern } from "./Style";

type ProgressaoEDefensivoProps = {
  valor1?: ApiResponse;
  valor2?: ApiResponse;
  valor3?: ApiResponse;
  golsV1?: ApiResponse;
  golsV2?: ApiResponse;
  golsV3?: ApiResponse;
};
export const ProgressaoEDefensivo = ({
  valor1,
  valor2,
  valor3,
  golsV1,
  golsV2,
  golsV3,
}: ProgressaoEDefensivoProps) => {
  const ganhos = valor1?.response?.[0]?.statistics?.[0]?.duels?.won || 0;
  const totais = valor1?.response?.[0]?.statistics?.[0]?.duels?.total || 1;
  const percentualGanho = ((ganhos / totais) * 100).toFixed(0);
  return (
    <MainContainer>
      <SectionProgressaoContainern>
        <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
          Progressão por Temporada
        </ParagrafoEstilo>
        <div className="prograssaoInfo">
          <div className="prograssaoInfoGrafico">
            <RatingChart
              rating1={valor1?.response?.[0]?.statistics?.[0]?.games?.rating}
              rating2={valor2?.response?.[0]?.statistics?.[0]?.games?.rating}
              rating3={valor3?.response?.[0]?.statistics?.[0]?.games?.rating}
            />
          </div>
          <div className="prograssaoInfoGrafico">
            <GoalsChart
              golsT1={golsV1?.response?.[0]?.statistics?.[0]?.goals?.total || 0}
              golsT2={golsV2?.response?.[0]?.statistics?.[0]?.goals?.total || 0}
              golsT3={golsV3?.response?.[0]?.statistics?.[0]?.goals?.total || 0}
            />
          </div>
        </div>
      </SectionProgressaoContainern>

      <AsideDefensivoContainer>
        <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
          Defensivo & Físico
        </ParagrafoEstilo>
        <div className="defensivoInfo">
          <div className="defensivoInfoDados">
            <span>Desarmes Ganhos</span>
            <ParagrafoEstilo $cor={"#f3f4f6"}>
              {valor1?.response?.[0]?.statistics?.[0]?.tackles?.total || 0}
            </ParagrafoEstilo>
          </div>
          <div className="defensivoInfoDados">
            <span>Interceptações</span>
            <ParagrafoEstilo $cor={"#f3f4f6"}>
              {valor1?.response?.[0]?.statistics?.[0]?.tackles?.interceptions ||
                0}
            </ParagrafoEstilo>
          </div>
          <div className="defensivoInfoDados">
            <span>Chute ao Gol</span>
            <ParagrafoEstilo $cor={"#f3f4f6"}>
              {" "}
              {valor1?.response?.[0]?.statistics?.[0]?.shots?.total || 0}
            </ParagrafoEstilo>
          </div>
          <div className="defensivoInfoDados">
            <span>Duelos Aéreos</span>
            <ParagrafoEstilo $cor={"#f3f4f6"}>
              {percentualGanho}%
            </ParagrafoEstilo>
          </div>
          <div className="defensivoInfoDados">
            <span>Minutos Jogados</span>
            <ParagrafoEstilo $cor={"#f3f4f6"}>
              {valor1?.response?.[0]?.statistics?.[0]?.games?.minutes || 0}
            </ParagrafoEstilo>
          </div>
        </div>
      </AsideDefensivoContainer>
    </MainContainer>
  );
};
