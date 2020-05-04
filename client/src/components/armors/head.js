import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

function Head(props){
    console.log(props)
    if (!props.head){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        No armor selected
                    </Card.Title>
                </Card.Body>
            </Card>
        )
    }else{
        return(
            <Card>
                <Card.Body>
                    <Card.Title>
                        {props.head.name}
                    </Card.Title>
                        <ListGroup.Item>Defense: {props.head.defense.base}</ListGroup.Item>
                        <ListGroup.Item>Fire Resistance: {props.head.resistances.fire}</ListGroup.Item>
                        <ListGroup.Item>Water Resistance: {props.head.resistances.water}</ListGroup.Item>
                        <ListGroup.Item>Ice Resistance: {props.head.resistances.ice}</ListGroup.Item>
                        <ListGroup.Item>Thunder Resistance:{props.head.resistances.thunder}</ListGroup.Item>
                        <ListGroup.Item>Dragon Resistance: {props.head.resistances.dragon}</ListGroup.Item>
                </Card.Body>
            </Card>
        )
    }
}
export default Head