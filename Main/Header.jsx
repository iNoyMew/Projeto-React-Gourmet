import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import {
    Navbar, NavbarBrand, NavbarToggler,
    Collapse, Nav, NavItem, NavLink, Button
} from 'reactstrap';
import { logout } from '../redux/authSlice.jsx';

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth = useSelector(state => state.auth);
    const isAuthenticated = !!auth.token;

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <>
            <Navbar fixed="top" style={{ width: "100vw" }} color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <img src="../src/assets/logo.png" width="70" height="70"  className="d-inline-block align-top me-2" alt="Logo" title="logo" />

                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto topo" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/sobre-nos">Sobre Nós</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/menu">Menu</NavLink>
                        </NavItem>
                        {isAuthenticated ? (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/create-card">Criar Cards</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button color="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </NavItem>
                            </>
                        ) : (
                            <NavItem>
                                <Button color="success" onClick={() => navigate('/login')}>
                                    Login
                                </Button>
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}
