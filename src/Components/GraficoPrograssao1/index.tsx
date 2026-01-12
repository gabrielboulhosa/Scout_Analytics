import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ParagrafoEstilo } from "../types/type_paragrafo/style";
import { RatingChartContainer } from "./style";

type RatingData = {
  rating1?: string;
  rating2?: string;
  rating3?: string;
};

export function RatingChart({ rating1, rating2, rating3 }: RatingData) {
  const RatingData = [
    { season: "2023/24", value: rating1 ? parseFloat(rating1) : 0 },
    { season: "2022/23", value: rating2 ? parseFloat(rating2) : 0 },
    { season: "2021/22", value: rating3 ? parseFloat(rating3) : 0 },
  ];
  return (
    <RatingChartContainer>
      <div style={{ width: "100%", height: 260 }}>
        <ParagrafoEstilo
          className="ratingChartText"
          $fonte={13}
          $cor={"#3b82f6"}
        >
          PROGRESSÃO DE RATING
        </ParagrafoEstilo>

        <ResponsiveContainer>
          <BarChart data={RatingData} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="season" />
            <YAxis domain={[0, 10]} />
            <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </RatingChartContainer>
  );
}
