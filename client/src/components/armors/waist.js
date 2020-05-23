import React from "react";
import SkillDisplay from "../SkillDisplay";

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
                <td>
                    <SkillDisplay armor={props.waist} />
                </td>
            </tbody>
        )
    }
}
export default Waist