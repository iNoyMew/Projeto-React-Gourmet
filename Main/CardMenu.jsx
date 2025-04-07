import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default function CardMenu({menu, onClick}) {

    return (
        <>
            <Card onClick={onClick}>
                <CardImg top width="100%" src={menu.foto} alt={menu.name} />
                <CardBody>
                    <CardTitle tag="h4">{menu.name}</CardTitle>
                    <CardText>{menu.color}</CardText>
                </CardBody>
            </Card>
        </>
    );
}