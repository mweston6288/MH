import React from "react";
import Card from "react-bootstrap/Card"

function Total(props) {
    console.log(props)
    let defense = 0;
    let fireRes =0;
    let waterRes=0;
    let thunderRes=0;
    let iceRes=0;
    let dragonRes=0;


    if (!props.waist) {
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
                        {props.waist.name}
                    </Card.Title>
                    <Card.Text>
                        <ListGroup.Item>Defense: {props.waist.defense.base}</ListGroup.Item>
                        <ListGroup.Item>Fire Resistance: {props.waist.resistances.fire}</ListGroup.Item>
                        <ListGroup.Item>Water Resistance: {props.waist.resistances.water}</ListGroup.Item>
                        <ListGroup.Item>Ice Resistance: {props.waist.resistances.ice}</ListGroup.Item>
                        <ListGroup.Item>Thunder Resistance:{props.waist.resistances.thunder}</ListGroup.Item>
                        <ListGroup.Item>Dragon Resistance: {props.waist.resistances.dragon}</ListGroup.Item>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default Total;