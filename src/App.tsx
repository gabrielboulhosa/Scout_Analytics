import { useDispatch, useSelector } from "react-redux";
import { Cabecalho } from "./Containers/Cabecalho";

import {
  useIdComparacaoQuery,
  useLazyBuscaridQuery,
  useLazyBuscarNomeQuery,
} from "./Services/api";

import { Top10 } from "./Containers/Top10";
import { Top10Area } from "./Containers/Top10Area";
import { DesempenhoEAtributos } from "./Containers/AreaDeBusca/DesempenhoEAtributos";
import { HistóricoDeTemporadas } from "./Containers/AreaDeBusca/HistóricoDeTemporadas";
import { IdentidadeJogador } from "./Containers/AreaDeBusca/Identidade";
import { ProgressaoEDefensivo } from "./Containers/AreaDeBusca/ProgressaoEDefensivo/Index";
import { Container, GlobalStyle } from "./Style";
import type { RootState } from "./store/store";
import { useEffect } from "react";
import { atualizaId } from "./store/formSlice";
import { SelecaoDeJogador } from "./Containers/AreaDeBusca/SelecaoDeJogador";
import { HeaderArea } from "./Containers/Area_De_Comparacao/Header";
import { AreaComparacao } from "./Containers/Area_De_Comparacao/AreaPerfil";
import { AreaComparacaoStatistics } from "./Containers/Area_De_Comparacao/AreaComparacaoStatistics";

function App() {
  const texto = useSelector((state: RootState) => state.form.texto);
  const id = useSelector((state: RootState) => state.form.id);
  const dispatch = useDispatch();
  const [buscarNome, { data: searchNome, isLoading, reset: resetNome }] =
    useLazyBuscarNomeQuery();
  const [buscarId, { data: searchId, isLoading: isLoadingId, reset: resetId }] =
    useLazyBuscaridQuery();

  const idComparar = useSelector((state: RootState) => state.form.idComparar);
  const { data: playersComparar, isFetching: isFetchingComparar } =
    useIdComparacaoQuery(idComparar, { skip: idComparar.length !== 2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (texto) {
      dispatch(atualizaId(""));
      resetId();
      buscarNome(texto);
    }
  };

  useEffect(() => {
    if (id) {
      resetNome();
      buscarId(id);
    }
  }, [id]);
  console.log(playersComparar);

  return (
    <>
      <GlobalStyle />
      <Cabecalho onSubmit={handleSubmit} />
      <Container>
        {isFetchingComparar ? (
          <h1>carregando...</h1>
        ) : playersComparar?.length === 2 && idComparar.length === 2 ? (
          <>
            <HeaderArea />
            <AreaComparacao
              playerInfos1={playersComparar?.[0]}
              playerInfos2={playersComparar?.[1]}
            />
            <AreaComparacaoStatistics
              playerInfos1={playersComparar?.[0]}
              playerInfos2={playersComparar?.[1]}
            />
          </>
        ) : isLoading || isLoadingId ? (
          <h1>carregando...</h1>
        ) : searchId ? (
          searchId?.[0]?.response?.length === 0 ? (
            <h1>Jogador não encontrado. Tente outro nome ou ID.</h1>
          ) : (
            <>
              <IdentidadeJogador searchPlayer={searchId?.[0]} />
              <DesempenhoEAtributos searchPlayer={searchId?.[0]} />
              <ProgressaoEDefensivo
                valor1={searchId?.[0]}
                valor2={searchId?.[1]}
                valor3={searchId?.[2]}
                golsV1={searchId?.[0]}
                golsV2={searchId?.[1]}
                golsV3={searchId?.[2]}
              />
              <HistóricoDeTemporadas
                searchPlayer23={searchId?.[0]}
                searchPlayer22={searchId?.[1] || null}
                searchPlayer21={searchId?.[2] || null}
              />
            </>
          )
        ) : searchNome ? (
          <>
            <SelecaoDeJogador searchPlayer={searchNome} />
          </>
        ) : (
          <>
            <Top10 />
            <Top10Area />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
