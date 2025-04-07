import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
import pedidoReducer from "./pedidoSlice";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        card: cardReducer,
        pedido: pedidoReducer,
        auth: authReducer,
    },
});
