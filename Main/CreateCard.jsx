import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/cardSlice";
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle } from 'reactstrap';
import { useNavigate } from "react-router-dom";

export default function CreateCard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        category: "Prato Principal",
        available: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoCard = {
            id: Date.now(),
            ...formData
        };

        dispatch(addCard(novoCard));

        setFormData({
            name: "",
            description: "",
            price: "",
            imageUrl: "",
            category: "Prato Principal",
            available: false
        });

        navigate("/exibir");
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light" style={{ backgroundImage: 'url(/fundo-madeira.jpg)', backgroundSize: 'cover' }}>
            <Card style={{
                maxWidth: '600px',
                width: '100%',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                fontFamily: "'Merriweather', serif"
            }}>
                <CardBody>
                    <CardTitle tag="h2" className="text-center mb-4" style={{ color: '#5a3e2b' }}>
                        Criar Novo Prato
                    </CardTitle>

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Nome do Prato</Label>
                            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Descrição</Label>
                            <Input id="description" name="description" type="textarea" value={formData.description} onChange={handleChange} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="price">Preço (R$)</Label>
                            <Input id="price" name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="imageUrl">Imagem do Prato (URL)</Label>
                            <Input id="imageUrl" name="imageUrl" type="text" value={formData.imageUrl} onChange={handleChange} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Categoria</Label>
                            <Input id="category" name="category" type="select" value={formData.category} onChange={handleChange}>
                                <option>Prato Principal</option>
                                <option>Entrada</option>
                                <option>Sobremesa</option>
                                <option>Bebida</option>
                            </Input>
                        </FormGroup>

                        <FormGroup check className="mb-3">
                            <Input type="checkbox" id="available" name="available" checked={formData.available} onChange={handleChange} />
                            <Label for="available" check>Disponível no menu</Label>
                        </FormGroup>

                        <Button color="dark" block style={{ backgroundColor: 'dark', borderColor: 'wheat' }}>
                            Adicionar Prato
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}
