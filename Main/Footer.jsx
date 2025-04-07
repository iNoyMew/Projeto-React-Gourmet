import React from 'react';
import "./Main.css";

const Footer = () => {

    return(
        <footer className="bg-dark text-white text-center p-3 footer">
            <p>Restaurante React Gourmet Trabalho {new Date().getFullYear()}</p>
        </footer>
    )
}


export default Footer;