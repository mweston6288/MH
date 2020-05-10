import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
function Waist(props) {
    if (!props.waist) {
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
                        {props.waist.name}
                    </Card.Title>
                    <ListGroup>
                        <ListGroup.Item>Defense {props.waist.defense.base}</ListGroup.Item>
                        <ListGroup.Item>Fire Resistance {props.waist.resistances.fire}</ListGroup.Item>
                        <ListGroup.Item>Water Resistance {props.waist.resistances.water}</ListGroup.Item>
                        <ListGroup.Item>Ice Resistance {props.waist.resistances.ice}</ListGroup.Item>
                        <ListGroup.Item>Thunder Resistance {props.waist.resistances.thunder}</ListGroup.Item>
                        <ListGroup.Item>Dragon Resistance {props.waist.resistances.dragon}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        {props.waist.skills.map(skill => (
                            <ListGroup.Item>{skill.skillName} {skill.level}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }
}
export default Waist