import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

function Legs(props) {
    if (!props.legs) {
        return (
            <tbody>
                <td>None selected</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tbody>
        )
    } else {
        return (
            <tbody>
                <td>{props.legs.name}</td>
                <td>{props.legs.defense.base}</td>
                <td> {props.legs.resistances.fire}</td>
                <td> {props.legs.resistances.water}</td>
                <td> {props.legs.resistances.thunder}</td>
                <td> {props.legs.resistances.ice}</td>
                <td> {props.legs.resistances.dragon}</td>
            </tbody>
        )
    }
}
export default Legs;