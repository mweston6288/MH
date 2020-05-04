import React from "react";
import Card from "react-bootstrap/Card"

function Head(props) {
    console.log(props)
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
                        <p>{props.waist.defense.base}</p>
                        <p>{props.waist.resistances.fire}</p>
                        <p>{props.waist.resistances.water}</p>
                        <p>{props.waist.resistances.ice}</p>
                        <p>{props.waist.resistances.thunder}</p>
                        <p>{props.waist.resistances.dragon}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default Head