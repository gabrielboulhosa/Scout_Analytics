import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { StyleSimpleRadarChart } from "./Style";

type Atributos = {
  atributo1: number;
  atributo2: number;
  atributo3: number;
  atributo4: number;
  atributo5: number;
  atributo6: number;
};

export default function SimpleRadarChart({
  atributo1,
  atributo2,
  atributo3,
  atributo4,
  atributo5,
  atributo6,
}: Atributos) {
  const maxValue = Math.max(
    atributo1,
    atributo2,
    atributo3,
    atributo4,
    atributo5,
    atributo6,
  );
  // Dados de exemplo
  const Data = [
    { subject: "Ataque", A: atributo1, fullMark: maxValue },
    { subject: "Técnica", A: atributo2, fullMark: maxValue },
    { subject: "Passe", A: atributo3, fullMark: maxValue },
    { subject: "Físico", A: atributo4, fullMark: maxValue },
    { subject: "Defesa", A: atributo5, fullMark: maxValue },
    { subject: "Visão", A: atributo6, fullMark: maxValue },
  ];
  return (
    <StyleSimpleRadarChart>
      <div style={{ width: "100%", height: "265px", padding: "10px 10px" }}>
        <ResponsiveContainer>
          <RadarChart data={Data} outerRadius="85%">
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, maxValue]} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </StyleSimpleRadarChart>
  );
}
