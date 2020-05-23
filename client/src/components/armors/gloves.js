import React from "react";
import SkillDisplay from "../SkillDisplay";

function Gloves(props) {
    if (!props.gloves) {
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
                <td>{props.gloves.name}</td>
                <td>{props.gloves.defense.base}</td>
                <td> {props.gloves.resistances.fire}</td>
                <td> {props.gloves.resistances.water}</td>
                <td> {props.gloves.resistances.thunder}</td>
                <td> {props.gloves.resistances.ice}</td>
                <td> {props.gloves.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={props.gloves} />
                </td>
            </tbody>
        )
    }
}
export default Gloves