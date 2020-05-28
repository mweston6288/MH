import React from "react";
import SkillDisplay from "../SkillDisplay";
import legs from "../../images/mhw-greaves.png"

function Legs(props) {
    if (!props.legs) {
        return (
            <tbody>
                <td><img src={legs} alt="legs" /></td>
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
                <td><img src={legs} alt="legs" /></td>
                <td>{props.legs.name}</td>
                <td>{props.legs.defense.base}</td>
                <td> {props.legs.resistances.fire}</td>
                <td> {props.legs.resistances.water}</td>
                <td> {props.legs.resistances.thunder}</td>
                <td> {props.legs.resistances.ice}</td>
                <td> {props.legs.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={props.legs} />
                </td>
            </tbody>
        )
    }
}
export default Legs;