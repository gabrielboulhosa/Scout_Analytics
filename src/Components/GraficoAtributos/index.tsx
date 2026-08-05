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
  temporada1: {
    atributo1: number;
    atributo2: number;
    atributo3: number;
    atributo4: number;
    atributo5: number;
    atributo6: number;
  };

  temporada2: {
    atributoT2_1: number;
    atributoT2_2: number;
    atributoT2_3: number;
    atributoT2_4: number;
    atributoT2_5: number;
    atributoT2_6: number;
  };

  temporada3: {
    atributoT3_1: number;
    atributoT3_2: number;
    atributoT3_3: number;
    atributoT3_4: number;
    atributoT3_5: number;
    atributoT3_6: number;
  };
};

export default function SimpleRadarChart({
  temporada1: {
    atributo1,
    atributo2,
    atributo3,
    atributo4,
    atributo5,
    atributo6,
  },
  temporada2: {
    atributoT2_1,
    atributoT2_2,
    atributoT2_3,
    atributoT2_4,
    atributoT2_5,
    atributoT2_6,
  },
  temporada3: {
    atributoT3_1,
    atributoT3_2,
    atributoT3_3,
    atributoT3_4,
    atributoT3_5,
    atributoT3_6,
  },
}: Atributos) {
  function calcular(
    valor1: number,
    valor2: number,
    valor3: number,
    limite: number,
  ): number {
    const soma = valor1 + valor2 + valor3;
    return Math.min(soma, limite);
  }

  const maiorValor = Math.max(
    calcular(atributo1, atributoT2_1, atributoT3_1, 300),
    calcular(atributo2, atributoT2_2, atributoT3_2, 300),
    calcular(atributo3, atributoT2_3, atributoT3_3, 300),
    calcular(atributo4, atributoT2_4, atributoT3_4, 300),
    calcular(atributo5, atributoT2_5, atributoT3_5, 300),
    calcular(atributo6, atributoT2_6, atributoT3_6, 300),
  );

  // Dados de exemplo
  const Data = [
    {
      subject: "Ataque",
      A: calcular(atributo1, atributoT2_1, atributoT3_1, 300),
      fullMark: maiorValor,
    },
    {
      subject: "Técnica",
      A: calcular(atributo2, atributoT2_2, atributoT3_2, 300),
      fullMark: maiorValor,
    },
    {
      subject: "Passe",
      A: calcular(atributo3, atributoT2_3, atributoT3_3, 300),
      fullMark: maiorValor,
    },
    {
      subject: "Físico",
      A: calcular(atributo4, atributoT2_4, atributoT3_4, 300),
      fullMark: maiorValor,
    },
    {
      subject: "Defesa",
      A: calcular(atributo5, atributoT2_5, atributoT3_5, 300),
      fullMark: maiorValor,
    },
    {
      subject: "Visão",
      A: calcular(atributo6, atributoT2_6, atributoT3_6, 300),
      fullMark: maiorValor,
    },
  ];
  return (
    <StyleSimpleRadarChart>
      <div style={{ width: "100%", height: "265px", padding: "10px 10px" }}>
        <ResponsiveContainer>
          <RadarChart data={Data} outerRadius="85%">
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, maiorValor]} />
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
