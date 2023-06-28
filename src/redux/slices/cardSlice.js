import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard(state) {
      state.cards.push({
        id: new Date().getTime(),
        status: 'perform',
        text: 'Нажмите на карандаш, чтобы ввести текст',
      });
    },

    removeCard(state, action) {
      state.cards = state.cards.filter((cards) => cards.id !== action.payload.id);
    },

    editCard(state, action) {
      const card = state.cards.find((card) => card.id === action.payload.id);
      if (card) {
        card.text = action.payload.area;
      }
    },

    updateStatusCard(state, action) {
      const card = state.cards.find((card) => card.id === action.payload.id);
      if (card) {
        card.status = action.payload.status;
      }
    },
  },
});

export const selectCardData = (state) => state.tasks;

export const findCardById = (id) => (state) => state.tasks.cards.filter((obj) => obj.id === id);

export const findCardByStatus = (status) => (state) =>
  state.tasks.cards.filter((obj) => obj.status === status) || [];

export const { addCard, removeCard, editCard, updateStatusCard } = cardSlice.actions;

export default cardSlice.reducer;
