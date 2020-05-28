import React from "react";
import SkillDisplay from "../SkillDisplay";
import waist from "../../images/mhw-waist.png"

function Waist(props) {
    if (!props.waist) {
        return (
            <tbody>
                <td><img src={waist} alt="waist" /></td>
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
                <td><img src={waist} alt="waist" /></td>
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