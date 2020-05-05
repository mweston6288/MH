import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

function Total({armor}) {
    let defense = 0;
    let fireRes =0;
    let waterRes=0;
    let thunderRes=0;
    let iceRes=0;
    let dragonRes=0;

    for (const armorPiece in armor) {
        if (armor[armorPiece]){
            defense += armor[armorPiece].defense.base
            fireRes += armor[armorPiece].resistances.fire
            waterRes += armor[armorPiece].resistances.water
            thunderRes += armor[armorPiece].resistances.thunder
            iceRes += armor[armorPiece].resistances.ice
            dragonRes += armor[armorPiece].resistances.dragon
        }
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title>Total
                </Card.Title>
                    <ListGroup.Item>Defense:{defense}</ListGroup.Item>
                    <ListGroup.Item>Fire Resistance:{fireRes}</ListGroup.Item>
                    <ListGroup.Item>Water Resistance: {waterRes}</ListGroup.Item>
                    <ListGroup.Item>Ice Resistance: {iceRes}</ListGroup.Item>
                    <ListGroup.Item>Thunder Resistance:{thunderRes}</ListGroup.Item>
                    <ListGroup.Item>Dragon Resistance: {dragonRes}</ListGroup.Item>
            </Card.Body>
        </Card>
    )
}
export default Total;