import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
function Waist(props) {
    if (!props.waist) {
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
                <td>{props.waist.name}</td>
                <td>{props.waist.defense.base}</td>
                <td> {props.waist.resistances.fire}</td>
                <td> {props.waist.resistances.water}</td>
                <td> {props.waist.resistances.thunder}</td>
                <td> {props.waist.resistances.ice}</td>
                <td> {props.waist.resistances.dragon}</td>
            </tbody>
        )
    }
}
export default Waist