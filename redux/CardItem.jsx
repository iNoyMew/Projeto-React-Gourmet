import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const CardItem = ({ item, onClick }) => {
    return (
        <Card color="dark"
              outline
              style={{
                  width: '18rem'
              }} onClick={onClick} className="card-item">
            <CardImg src={item.imageUrl} alt={item.name} />
            <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <CardText>R$ {item.price}</CardText>
            </CardBody>
        </Card>
    );
};

export default CardItem;
