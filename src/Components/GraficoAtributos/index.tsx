import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { StyleSimpleRadarChart } from "./Style";

// Dados de exemplo
const data = [
  { subject: "Ataque", A: 120, fullMark: 150 },
  { subject: "Técnica", A: 65, fullMark: 150 },
  { subject: "Passe", A: 85, fullMark: 150 },
  { subject: "Físico", A: 99, fullMark: 150 },
  { subject: "Defesa", A: 86, fullMark: 150 },
  { subject: "Visão", A: 98, fullMark: 150 },
];

export default function SimpleRadarChart() {
  return (
    <StyleSimpleRadarChart>
      <div style={{ width: "100%", height: "265px", padding: "10px 10px" }}>
        <ResponsiveContainer>
          <RadarChart data={data} outerRadius="80%">
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
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
