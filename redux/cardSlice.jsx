import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: JSON.parse(localStorage.getItem("cards")) || []
};

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
            localStorage.setItem("cards", JSON.stringify(state.cards));
        },
        removeCard: (state, action) => {
            const index = state.cards.findIndex(card => card.id === action.payload);
            if (index !== -1) {
                state.cards.splice(index, 1);
                localStorage.setItem("cards", JSON.stringify(state.cards));
            }

        },
        clearCard: (state, index) => {
            state.cards = state.cards.slice(0, index);
            localStorage.setItem("cards", JSON.stringify(state.cards));
        }

    }
});

export const { addCard, removeCard, clearCard } = cardSlice.actions;
export default cardSlice.reducer;
