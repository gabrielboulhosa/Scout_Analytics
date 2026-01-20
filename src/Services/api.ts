// src/services/footballApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApiResponse } from "../Components/types/type_players";

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v3.football.api-sports.io/",
    prepareHeaders: (headers) => {
      headers.set("x-apisports-key", import.meta.env.VITE_API_FOOTBALL_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTop20: builder.query<ApiResponse, void>({
      query: () => `players/topscorers?league=71&season=2024`,
    }),
    buscarNome: builder.query<ApiResponse, string>({
      query: (playName) => `players?search=${playName}&league=71&season=2024`,
    }),
    buscarid: builder.query<ApiResponse[], string>({
      queryFn: async (playId) => {
        const seasons = [2024, 2023, 2022];
        const promises = seasons.map((season) =>
          fetch(
            `https://v3.football.api-sports.io/players?id=${playId}&league=71&season=${season}`,
            {
              headers: {
                "x-apisports-key": import.meta.env.VITE_API_FOOTBALL_KEY,
              },
            },
          ).then((res) => res.json()),
        );

        try {
          const results = await Promise.all(promises);
          return { data: results };
        } catch (error) {
          return {
            error: {
              status: "FETCH_ERROR",
              error: String(error),
            },
          };
        }
      },
    }),

    idComparacao: builder.query<ApiResponse[], number[]>({
      queryFn: async (playsId) => {
        const playsComparacao = playsId;
        const promises = playsComparacao.map((playsId) =>
          fetch(
            `https://v3.football.api-sports.io/players?id=${playsId}&league=71&season=2024`,
            {
              headers: {
                "x-apisports-key": import.meta.env.VITE_API_FOOTBALL_KEY,
              },
            },
          ).then((res) => res.json()),
        );

        try {
          const results = await Promise.all(promises);
          return { data: results };
        } catch (error) {
          return {
            error: {
              status: "FETCH_ERROR",
              error: String(error),
            },
          };
        }
      },
    }),
  }),
});

export const {
  useGetTop20Query,
  useBuscarNomeQuery,
  useLazyBuscarNomeQuery,
  useBuscaridQuery,
  useLazyBuscaridQuery,
  useIdComparacaoQuery,
} = footballApi;
