import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import  {store}  from "../redux/store.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Main/Header.jsx";
import Footer from "../Main/Footer.jsx";
import Principal from "../Main/Principal.jsx";
import SobreNos from "../Main/SobreNos.jsx";
import Menu from "../Main/Menu.jsx";
import CreateCard from "../Main/CreateCard.jsx";
import CardList from "../redux/CardList.jsx";
import Exibir from "../redux/Exibir.jsx";
import {Container} from 'reactstrap';


import Login from '../Main/Login.jsx';
import PrivateRoute from '../Main/PrivateRoute.jsx';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Container>
                <Routes>
                    <Route path="/" element={<Principal />} />
                    <Route path="/sobre-nos" element={<SobreNos />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/create-card" element={<CreateCard />} />
                    <Route path="/exibir" element={<Exibir />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={
                        <PrivateRoute>
                            <h2>Página Protegida: Dashboard</h2>
                        </PrivateRoute>
                    }
                    />
                </Routes>
                </Container>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
