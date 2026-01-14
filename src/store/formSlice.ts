import { createSlice } from "@reduxjs/toolkit";
import type { Player } from "../Components/types/type_players";

type FormState = {
  texto: string;
  id: string;
  idComparar: Player[];
};

const initialState: FormState = {
  texto: "",
  id: "",
  idComparar: [],
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
    atualizaIdComparar: (state, action) => {
      if (!state.idComparar.includes(action.payload)) {
        state.idComparar.push(action.payload);
      }
    },
  },
});

export const { atualizaTexto, atualizaId, atualizaIdComparar } =
  formSlice.actions;
export default formSlice.reducer;
