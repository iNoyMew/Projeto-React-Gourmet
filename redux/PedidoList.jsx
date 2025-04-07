import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePedido, clearPedidos } from "./pedidoSlice";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const PedidoList = () => {
    const pedidos = useSelector((state) => state.pedido.pedidos);
    const auth = useSelector(state => state.auth);
    const isAuthenticated = !!auth.token;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleConcluirPedido = () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        alert("✅ Pedido concluído com sucesso!");
        dispatch(clearPedidos());
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-lg mt-8 font-poppins">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">🛒 Pedidos Realizados</h2>

            {pedidos.length === 0 ? (
                <p className="text-center text-gray-500">Nenhum pedido realizado.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {pedidos.map((pedido) => (
                            <div key={pedido.id} className="border rounded-lg p-4 shadow-sm bg-gray-50">
                                <img src={pedido.imageUrl} alt="Foto do pedido" className="w-full h-40 object-cover mb-2 rounded-md"/>
                                <h4 className="text-lg font-semibold text-gray-800">{pedido.name}</h4>
                                <p className="text-gray-600">{pedido.description}</p>
                                <p className="text-green-600 font-bold">R$ {pedido.price}</p>
                                <Button
                                    color="danger"
                                    onClick={() => dispatch(removePedido(pedido.id))}
                                    className="mt-3"
                                >
                                    Remover Pedido
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-6 space-x-4">
                        <Button
                            color="warning"
                            onClick={() => dispatch(clearPedidos())}
                            className="text-white"
                        >
                            Limpar Todos os Pedidos
                        </Button>

                        <Button
                            color="success"
                            onClick={handleConcluirPedido}
                            disabled={!isAuthenticated}
                        >
                            Concluir Pedido
                        </Button>
                    </div>

                    {!isAuthenticated && (
                        <p className="text-red-600 text-center mt-3">
                            ⚠️ Você precisa estar logado para concluir o pedido.
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default PedidoList;
