import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCard, clearCard } from "./cardSlice";
import { addPedido } from "./pedidoSlice";
import { Button, Alert } from "reactstrap";
import CardItem from "./CardItem";
import "@fontsource/poppins";

const CardList = () => {
    const cards = useSelector(state => state.card.cards || []);
    const pedidos = useSelector(state => state.pedido.pedidos || []);
    const dispatch = useDispatch();

    const fazerPedido = (item) => {
        const jaExiste = pedidos.find(p => p.id === item.id);
        if (!jaExiste) {
            dispatch(addPedido({ ...item, id: Date.now() }));
            alert("✅ Pedido adicionado com sucesso!");
        } else {
            alert("⚠️ Erro ao selecionar o prato, favor tentar novamente.");
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg px-8 py-12 font-poppins max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 tracking-wide">
                📜 Nosso Cardápio
            </h2>

            {cards.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">
                    Nenhum prato cadastrado.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-50 rounded-xl shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <CardItem item={item} />
                            <div className="flex flex-col gap-3 mt-5">
                                <Button
                                    onClick={() => fazerPedido(item)}
                                    color="primary"
                                    className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 font-medium"
                                >
                                    🍽️ Fazer Pedido
                                </Button>

                                <Button
                                    onClick={() => dispatch(removeCard(item.id))}
                                    color="danger"
                                    className="w-full text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-300 font-medium"
                                >
                                    🗑️ Remover
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {cards.length > 0 && (
                <div className="text-center mt-12">
                    <Button
                        onClick={() => dispatch(clearCard())}
                        color="success"
                        className="px-8 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300 text-lg font-semibold"
                    >
                        🧹 Limpar Todos os Pratos
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CardList;
