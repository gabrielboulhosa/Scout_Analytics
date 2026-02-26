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
  // Estado do formulário global (Redux): texto digitado e ID informado
  const texto = useSelector((state: RootState) => state.form.texto);
  const id = useSelector((state: RootState) => state.form.id);
  const dispatch = useDispatch();

  // Queries lazy: busca por nome e por ID executadas sob demanda
  const [buscarNome, { data: searchNome, isLoading, reset: resetNome }] =
    useLazyBuscarNomeQuery();
  const [buscarId, { data: searchId, isLoading: isLoadingId, reset: resetId }] =
    useLazyBuscaridQuery();

  // Lista de IDs selecionados para comparação entre jogadores
  const idComparar = useSelector((state: RootState) => state.form.idComparar);

  // Query automática da comparação (só roda quando há exatamente 2 IDs)
  const { data: playersComparar, isFetching: isFetchingComparar } =
    useIdComparacaoQuery(idComparar, { skip: idComparar.length !== 2 });

  // Submit da busca por nome: limpa ID anterior e dispara busca textual
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (texto) {
      dispatch(atualizaId(""));
      resetId();
      buscarNome(texto);
    }
  };

  useEffect(() => {
    // Sempre que o ID muda, limpa o resultado por nome e busca os dados por ID
    if (id) {
      resetNome();
      buscarId(id);
    }
  }, [id, buscarId, resetNome]);

  // Flag que define quando os dados de comparação já estão prontos para exibir
  const isComparacaoPronta =
    playersComparar?.length === 2 && idComparar.length === 2;

  // Flag para exibir mensagem de "jogador não encontrado"
  const jogadorNaoEncontrado =
    !!searchId && searchId?.[0]?.response?.length === 0;

  // Estado unificado de carregamento (comparação, busca por nome e busca por ID)
  const isLoadingState = isFetchingComparar || isLoading || isLoadingId;

  // Renderiza loader global da aplicação
  const renderLoader = () => {
    return <div className="loader"></div>;
  };

  // Renderiza área completa de comparação entre dois jogadores
  const renderComparacao = () => {
    if (isComparacaoPronta) {
      return (
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
      );
    }
  };

  // Renderiza os detalhes da busca por ID (ou mensagem de não encontrado)
  const renderDetalhesJogador = () => {
    if (jogadorNaoEncontrado) {
      return <h1>Jogador não encontrado. Tente outro nome ou ID.</h1>;
    }

    if (searchId) {
      return (
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
            searchPlayer22={searchId?.[1]}
            searchPlayer21={searchId?.[2]}
          />
        </>
      );
    }

    return null;
  };

  // Renderiza resultado de busca por nome; sem resultado, exibe tela inicial
  const renderBuscaNome = () => {
    if (searchNome) {
      return <SelecaoDeJogador searchPlayer={searchNome} />;
    }

    return (
      <>
        <Top10 />
        <Top10Area />
      </>
    );
  };

  // Orquestra a renderização principal conforme o estado atual da aplicação
  const renderConteudo = () => {
    if (isLoadingState) {
      return renderLoader();
    }

    if (isComparacaoPronta) {
      return renderComparacao();
    }

    if (searchId) {
      return renderDetalhesJogador();
    }

    return renderBuscaNome();
  };

  return (
    <>
      {/* Estilos globais da aplicação */}
      <GlobalStyle />
      {/* Cabeçalho com formulário de busca */}
      <Cabecalho onSubmit={handleSubmit} />
      {/* Área dinâmica que alterna entre loader, comparação e resultados */}
      <Container>{renderConteudo()}</Container>
    </>
  );
}

export default App;
