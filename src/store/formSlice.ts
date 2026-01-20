import { createSlice } from "@reduxjs/toolkit";

type FormState = {
  texto: string;
  id: string;
  idComparar: number[];
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
      if (
        !state.idComparar.includes(action.payload) &&
        state.idComparar.length < 2
      ) {
        state.idComparar.push(action.payload);
      }
    },
    limparIdComparar: (state) => {
      state.idComparar = [];
    },
  },
});

export const {
  atualizaTexto,
  atualizaId,
  atualizaIdComparar,
  limparIdComparar,
} = formSlice.actions;
export default formSlice.reducer;
