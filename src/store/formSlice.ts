import { createSlice } from "@reduxjs/toolkit";
import type { Player } from "../Components/types/type_players";

type FormState = {
  texto: string;
  id: string;
  multiplasTemporadas: Player[] | null;
};

const initialState: FormState = {
  texto: "",
  id: "",
  multiplasTemporadas: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    atualizaTexto: (state, action) => {
      state.texto = action.payload;
    },
    atualizaId: (state, action) => {
      state.id = action.payload;
    },
    atualizaMultiplasTemporadas: (state, action) => {
      state.multiplasTemporadas = action.payload;
    },
  },
});

export const { atualizaTexto, atualizaId, atualizaMultiplasTemporadas } =
  formSlice.actions;
export default formSlice.reducer;
