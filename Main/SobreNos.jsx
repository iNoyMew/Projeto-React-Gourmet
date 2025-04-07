import React from "react";
import "./Main.css";

export default function SobreNos() {
    return (
        <>
        <br/>
            <br/>

        <div className="sobre-nos-container mt-1">
            <div className="sobre-nos-banner">
                <h1>Sobre Nós</h1>
            </div>

            <div className="sobre-nos-content">
                <p>
                    No <strong>Paladar Mineiro</strong>, combinamos tradição e inovação para oferecer uma
                    experiência gastronômica única. Nossa missão é trazer o melhor da culinária mineira,
                    com um toque moderno e sofisticado, sem perder o sabor caseiro que tanto amamos.
                </p>

                <div className="sobre-nos-cards">
                    <div className="card">
                        <img src="../Img/Foto1.png" alt="Nossa Cozinha" />
                        <h3>Paixão pela Cozinha</h3>
                        <p>Ingredientes frescos, receitas autênticas e chefs apaixonados pelo que fazem.</p>
                    </div>

                    <div className="card">
                        <img src="../Img/Foto2.png" alt="Ambiente Aconchegante" />
                        <h3>Ambiente Aconchegante</h3>
                        <p>Nosso espaço foi pensado para proporcionar conforto e momentos inesquecíveis.</p>
                    </div>

                    <div className="card">
                        <img src="../Img/Foto3.png" alt="Tradição e Sabor" />
                        <h3>Tradição e Sabor</h3>
                        <p>Resgatamos receitas clássicas e as reinventamos para surpreender seu paladar.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
