import React from "react";
import Card from "react-bootstrap/Card"

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
                    <Card.Text>
                        <p>{props.head.defense.base}</p>
                        <p>{props.head.resistances.fire}</p>
                        <p>{props.head.resistances.water}</p>
                        <p>{props.head.resistances.ice}</p>
                        <p>{props.head.resistances.thunder}</p>
                        <p>{props.head.resistances.dragon}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default Head