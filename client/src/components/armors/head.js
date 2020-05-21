import React from "react";

function Head(props){
    if (!props.head){
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
    }else{
        return(
            <tbody>
                <td>{props.head.name}</td>
                <td>{props.head.defense.base}</td>
                <td> {props.head.resistances.fire}</td>
                <td> {props.head.resistances.water}</td>
                <td> {props.head.resistances.thunder}</td>
                <td> {props.head.resistances.ice}</td>
                <td> {props.head.resistances.dragon}</td>
            </tbody>
        )
    }
}
export default Head