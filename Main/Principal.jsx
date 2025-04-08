import Menu from "../Main/Menu.jsx"
import {Link} from "react-router-dom";

export default function Principal() {
    return (
        <div className="principal">
            <div className="hero container">
                <div className="overlay">
                    <h1>Seja Bem-Vindo ao React Gourmet</h1>
                    <p>Comida boa é aqui mesmo, trem bão de qualidade é aqui.</p>
                   <Link to="/exibir">Veja nosso cardápio</Link>
                </div>
            </div>

            <section className="menu-preview">
                <h2>Nosso Cardápio</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="../Img/File.png"  className="principalFoto" width="300px" alt="Prato 1"/>
                        <h3>Filé Mignon ao Molho</h3>
                        <p>Delicioso filé mignon grelhado, servido com molho especial e acompanhamentos.</p>
                    </div>
                    <div className="menu-item">
                        <img src="../Img/Massa.png" className="principalFoto" width="300px" alt="Prato 2"/>
                        <h3>Massa Artesanal</h3>
                        <p>Massa feita na casa, com molho de tomate rústico e manjericão fresco.</p>
                    </div>
                </div>
                <Link to="/menu" className="btn-menu">Ver Cardápio Completo</Link>
            </section>
            <br/>
            <br/>
        </div>
    );
}
