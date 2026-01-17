import { useDispatch, useSelector } from "react-redux";
import { Cabecalho } from "./Containers/Cabecalho";

{
  /*
  import { Top10 } from "./Containers/Top10";
  import { Top10Area } from "./Containers/Top10Area";
  
  */
}
import { useLazyBuscaridQuery, useLazyBuscarNomeQuery } from "./Services/api";
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
import { AreaPerfil } from "./Containers/Area_De_Comparacao/AreaPerfil";

function App() {
  const texto = useSelector((state: RootState) => state.form.texto);
  const id = useSelector((state: RootState) => state.form.id);
  const dispatch = useDispatch();
  const [buscarNome, { data: searchNome, isLoading, reset: resetNome }] =
    useLazyBuscarNomeQuery();
  const [buscarId, { data: searchId, isLoading: isLoadingId, reset: resetId }] =
    useLazyBuscaridQuery();

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

  return (
    <>
      <GlobalStyle />
      <Cabecalho onSubmit={handleSubmit} />
      <Container>
        {isLoading || isLoadingId ? (
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
            <HeaderArea />
            <AreaPerfil />
            {/*
         
            <Top10 />
            <Top10Area />
         */}
          </>
        )}
      </Container>
    </>
  );
}

export default App;
