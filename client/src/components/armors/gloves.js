import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

function Gloves(props) {
    if (!props.gloves) {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        No armor selected
                    </Card.Title>
                    <ListGroup>
                        <ListGroup.Item>Defense: 0</ListGroup.Item>
                        <ListGroup.Item>Fire Resistance: 0</ListGroup.Item>
                        <ListGroup.Item>Water Resistance: 0</ListGroup.Item>
                        <ListGroup.Item>Ice Resistance: 0</ListGroup.Item>
                        <ListGroup.Item>Thunder Resistance:0</ListGroup.Item>
                        <ListGroup.Item>Dragon Resistance: 0</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    } else {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {props.gloves.name}
                    </Card.Title>
                    <ListGroup>
                        <ListGroup.Item>Defense: {props.gloves.defense.base}</ListGroup.Item>
                        <ListGroup.Item>Fire Resistance: {props.gloves.resistances.fire}</ListGroup.Item>
                        <ListGroup.Item>Water Resistance: {props.gloves.resistances.water}</ListGroup.Item>
                        <ListGroup.Item>Ice Resistance: {props.gloves.resistances.ice}</ListGroup.Item>
                        <ListGroup.Item>Thunder Resistance:{props.gloves.resistances.thunder}</ListGroup.Item>
                        <ListGroup.Item>Dragon Resistance: {props.gloves.resistances.dragon}</ListGroup.Item>
                        </ListGroup>
                    <ListGroup>
                        {props.gloves.skills.map(skill => (
                            <ListGroup.Item>{skill.skillName} {skill.level}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }
}
export default Gloves