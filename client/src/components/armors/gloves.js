import React from "react";
import Card from "react-bootstrap/Card"

function Head(props) {
    console.log(props)
    if (!props.gloves) {
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
                        {props.gloves.name}
                    </Card.Title>
                    <Card.Text>
                        <p>{props.gloves.defense.base}</p>
                        <p>{props.gloves.resistances.fire}</p>
                        <p>{props.gloves.resistances.water}</p>
                        <p>{props.gloves.resistances.ice}</p>
                        <p>{props.gloves.resistances.thunder}</p>
                        <p>{props.gloves.resistances.dragon}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default Head