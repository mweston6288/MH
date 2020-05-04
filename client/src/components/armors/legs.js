import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

function Legs(props) {
    console.log(props)
    if (!props.legs) {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        No armor selected
                    </Card.Title>
                </Card.Body>
            </Card>
        )
    } else {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {props.legs.name}
                    </Card.Title>
                        <ListGroup.Item>Defense: {props.legs.defense.base}</ListGroup.Item>
                        <ListGroup.Item>Fire Resistance: {props.legs.resistances.fire}</ListGroup.Item>
                        <ListGroup.Item>Water Resistance: {props.legs.resistances.water}</ListGroup.Item>
                        <ListGroup.Item>Ice Resistance: {props.legs.resistances.ice}</ListGroup.Item>
                        <ListGroup.Item>Thunder Resistance:{props.legs.resistances.thunder}</ListGroup.Item>
                        <ListGroup.Item>Dragon Resistance: {props.legs.resistances.dragon}</ListGroup.Item>
                </Card.Body>
            </Card>
        )
    }
}
export default Legs;