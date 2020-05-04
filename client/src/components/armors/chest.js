import React from "react";
import Card from "react-bootstrap/Card"

function Head(props) {
    console.log(props)
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
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {props.chest.name}
                    </Card.Title>
                    <Card.Text>
                        <p>{props.chest.defense.base}</p>
                        <p>{props.chest.resistances.fire}</p>
                        <p>{props.chest.resistances.water}</p>
                        <p>{props.chest.resistances.ice}</p>
                        <p>{props.chest.resistances.thunder}</p>
                        <p>{props.chest.resistances.dragon}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default Head