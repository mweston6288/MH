import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

function Chest(props) {
    if (!props.chest) {
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
        console.log(props.chest.skills)
        props.chest.skills.map(skill=>{
            console.log(skill)
        })
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {props.chest.name}
                    </Card.Title>
                    <ListGroup>
                        <ListGroup.Item>Defense: {props.chest.defense.base}</ListGroup.Item>
                        <ListGroup.Item>Fire Resistance: {props.chest.resistances.fire}</ListGroup.Item>
                        <ListGroup.Item>Water Resistance: {props.chest.resistances.water}</ListGroup.Item>
                        <ListGroup.Item>Ice Resistance: {props.chest.resistances.ice}</ListGroup.Item>
                        <ListGroup.Item>Thunder Resistance:{props.chest.resistances.thunder}</ListGroup.Item>
                        <ListGroup.Item>Dragon Resistance: {props.chest.resistances.dragon}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        {props.chest.skills.map(skill => (
                            <ListGroup.Item>{skill.skillName} {skill.level}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }
}
export default Chest;