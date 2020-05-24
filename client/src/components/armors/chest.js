import React from "react";
import SkillDisplay from "../SkillDisplay";

function Chest(props) {
    // Default appearance
    if (!props.chest) {
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
                <td>{props.chest.name}</td>
                <td>{props.chest.defense.base}</td>
                <td> {props.chest.resistances.fire}</td>
                <td> {props.chest.resistances.water}</td>
                <td> {props.chest.resistances.thunder}</td>
                <td> {props.chest.resistances.ice}</td>
                <td> {props.chest.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={props.chest} />
                </td>
            </tbody>
        )
    }
}
export default Chest;