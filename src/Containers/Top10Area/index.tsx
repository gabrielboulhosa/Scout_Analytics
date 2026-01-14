import { ParagrafoEstilo } from "../../Components/types/type_paragrafo/style";
import { AreaTop10 } from "./style";

import { useGetTop20Query } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { atualizaId } from "../../store/formSlice";

export function Top10Area() {
  const id = useSelector((state: RootState) => state.form.id);
  const dispatch = useDispatch();
  const { data: players, isLoading } = useGetTop20Query();

  if (isLoading) {
    return <div>Carregando...</div>;
  }
  if (!players || !players.response || players.response.length === 0) {
    return <div>Limite de API atingido ou jogador não encontrado</div>;
  }
  console.log(players);
  console.log(id);
  return (
    <AreaTop10>
      <ul>
        {/*campo da area 1*/}
        {players?.response.map((item) => (
          <li
            key={item.player.id}
            onClick={() => dispatch(atualizaId(item.player.id))}
          >
            <div className="area1">
              <img src={item.player.photo} alt="" />

              <ParagrafoEstilo $cor={"#F3F4F6"} $fonte={20}>
                {item.player.name}
              </ParagrafoEstilo>
            </div>
            {/*campo da area 2*/}
            <div className="area2">
              <div>
                <span>Jogos</span>{" "}
                <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
                  {item.statistics?.[0]?.games?.appearences || "N/A"}
                </ParagrafoEstilo>
              </div>
              <div>
                <span>Gols</span>{" "}
                <ParagrafoEstilo $fonte={20} $cor={"#3b82f6"}>
                  {item.statistics?.[0]?.goals?.total || "N/A"}
                </ParagrafoEstilo>
              </div>
              <div>
                <span>Assist.</span>{" "}
                <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
                  {item.statistics?.[0]?.goals?.assists || "N/A"}
                </ParagrafoEstilo>
              </div>
              <div>
                <span>G/J</span>{" "}
                <ParagrafoEstilo $fonte={20} $cor={"#22C55E"}>
                  {Number(item.statistics?.[0]?.games?.rating).toFixed(2) ||
                    "N/A"}
                </ParagrafoEstilo>
              </div>
            </div>
            {/*campo da borda*/}
            <div className="borda"></div>
            {/*campo da area 3*/}
            <div className="area3">
              <span>{item.player.nationality}</span>
              <span>{item.player.age} anos</span>
              <span>{item.statistics?.[0]?.team?.name || "N/A"}</span>
            </div>
          </li>
        ))}
      </ul>
    </AreaTop10>
  );
}
