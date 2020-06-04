import React from "react";
import SkillDisplay from "../SkillDisplay";
import legsLogo from "../../images/mhw-greaves.png"

function Legs({legs}) {
    if (!legs) {
        return (
            <tbody>
                <td><img src={legsLogo} alt="legs" /></td>
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
                <td><img src={legsLogo} alt="legs" /></td>
                <td>{legs.name}</td>
                <td>{legs.defense.base}</td>
                <td> {legs.resistances.fire}</td>
                <td> {legs.resistances.water}</td>
                <td> {legs.resistances.thunder}</td>
                <td> {legs.resistances.ice}</td>
                <td> {legs.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={legs} />
                </td>
            </tbody>
        )
    }
}
export default Legs;