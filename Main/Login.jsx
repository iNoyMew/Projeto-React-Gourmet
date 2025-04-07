import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, Input, Spinner, Alert } from "reactstrap";
import "./Login.css";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(loginAsync({ email, password }));
        if (loginAsync.fulfilled.match(resultAction)) {
            navigate("/");
        } else {
            console.log("Falha no login:", resultAction.error);
        }
    };

    return (
        <div className="login-container">
            <Card className="login-card shadow">
                <CardBody>
                    <CardTitle tag="h2" className="text-center mb-4 text-brown">Login - React Gourmet</CardTitle>

                    {auth.error && <Alert color="danger">{auth.error}</Alert>}

                    <form onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@domain.com"
                            className="mb-3"
                        />
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                            className="mb-4"
                        />
                        <Button
                            color="warning"
                            type="submit"
                            block
                            disabled={auth.status === "loading"}
                        >
                            {auth.status === "loading" ? <Spinner size="sm" /> : "Entrar"}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Login;
