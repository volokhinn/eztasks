import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cards: [],
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard(state, action) {
        state.cards.push(action.payload);
        console.log(action.payload);
    },

    removeCard(state, action) {

    },

    editCard(state, action) {
        
    },

    updateStatusCard(state, action) {
        
    },
  },
})

export const selectCardData = (state) => state.cardSlice;

export const findCardByStatus = (status) => (state) => state.cardSlice.cards.filter((obj) => obj.status === status) || [];

export const { addCard, removeCard, editCard, updateStatusCard } = cardSlice.actions;

export default cardSlice.reducer;