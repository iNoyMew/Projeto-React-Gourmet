import React from "react";
import CardList from "./CardList";
import PedidoList from "./PedidoList";
import "@fontsource/poppins";

export default function Exibir() {
    return (
        <div className="min-h-screen bg-gray-100 p-8 font-poppins">
            <br />
            <br />
            <br />
            <header className="text-center mb-10">
                <h1 className="text-5xl font-extrabold text-gray-800">🍽️ React Gourmet</h1>
                <p className="text-lg text-gray-600 mt-2">Explore os pratos e faça seus pedidos!</p>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                <CardList />
                <PedidoList />
            </div>
        </div>
    );
}
