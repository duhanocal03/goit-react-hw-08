import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    // Başlangıçta arama kutusu boştur
    name: "",
  },
  reducers: {
    // Arama kutusuna her harf girildiğinde tetiklenen eylem
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Eylemi (action) bileşenlerde (SearchBox gibi) kullanmak üzere dışa aktarıyoruz
export const { changeFilter } = filtersSlice.actions;

// Reducer'ı store.js'e eklemek üzere dışa aktarıyoruz
export const filtersReducer = filtersSlice.reducer;