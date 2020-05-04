import React from "react";
import Card from "react-bootstrap/Card"

function Head(props) {
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
                    <Card.Text>
                        <p>{props.legs.defense.base}</p>
                        <p>{props.legs.resistances.fire}</p>
                        <p>{props.legs.resistances.water}</p>
                        <p>{props.legs.resistances.ice}</p>
                        <p>{props.legs.resistances.thunder}</p>
                        <p>{props.legs.resistances.dragon}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default Head