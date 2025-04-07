import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    pedidos: JSON.parse(localStorage.getItem("pedido")) || []
};

const pedidoSlice = createSlice({
    name: "pedido",
    initialState,
    reducers: {
        addPedido: (state, action) => {
            state.pedidos.push(action.payload);
            localStorage.setItem("pedido", JSON.stringify(state.pedidos));
        },
        removePedido: (state, action) => {
            state.pedidos = state.pedidos.filter(p => p.id !== action.payload);
            localStorage.setItem("pedido", JSON.stringify(state.pedidos));
        },
        clearPedidos: (state) => {
            state.pedidos = [];
            localStorage.setItem("pedido", JSON.stringify([]));
        },
    },
});

export const { addPedido, removePedido, clearPedidos } = pedidoSlice.actions;
export default pedidoSlice.reducer;
