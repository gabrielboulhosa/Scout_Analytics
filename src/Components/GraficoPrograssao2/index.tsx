import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ParagrafoEstilo } from "../types/type_paragrafo/style";
import { GolsChartContainer } from "./style";

type GoalsData = {
  golsT1: number;
  golsT2: number;
  golsT3: number;
};

export function GoalsChart({ golsT1, golsT2, golsT3 }: GoalsData) {
  const goalsData = [
    { season: "2023/24", value: golsT1 || 0 },
    { season: "2022/23", value: golsT2 || 0 },
    { season: "2021/22", value: golsT3 || 0 },
  ];
  return (
    <GolsChartContainer>
      <div style={{ width: "100%", height: 260 }}>
        <ParagrafoEstilo className="golsChartText" $fonte={13} $cor={"#3b82f6"}>
          PROGRESSÃO DE GOLS
        </ParagrafoEstilo>

        <ResponsiveContainer>
          <BarChart data={goalsData} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="season" />
            <YAxis />
            <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </GolsChartContainer>
  );
}
