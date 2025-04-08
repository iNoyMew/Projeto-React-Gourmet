import React, {useState, useEffect} from 'react';
import {fetchMenu} from '../services/APIMenu.jsx';
import CardMenu from './CardMenu.jsx';
import "./Menu.css";
import CreateCard from './CreateCard.jsx';

export default function Menu() {
    const [menu, setMenu] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMenu = async () => {
            try {
                const response = await fetchMenu();
                setMenu(response.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }

        getMenu();
    }, []);

    if (loading) return <p>Carregando</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="menu-container">
                <h2 className="menu-title mt-5">Nosso Cardápio</h2>
                <div className="menu-grid mt-5 mb-5">
                    {menu.map((m) => (
                        <CardMenu menu={m} key={m.id} />
                    ))}
                </div>
                <br />
                <br/>
            </div>
            <br/>
            <br/>
            <br />
            <br/>
        </>

    );
}

