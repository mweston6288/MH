import React from "react";
import SkillDisplay from "../SkillDisplay";
import waistLogo from "../../images/mhw-waist.png"

function Waist({waist}) {
    if (!waist) {
        return (
            <tbody>
                <td><img src={waistLogo} alt="waist" /></td>
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
                <td><img src={waistLogo} alt="waist" /></td>
                <td>{waist.name}</td>
                <td>{waist.defense.base}</td>
                <td> {waist.resistances.fire}</td>
                <td> {waist.resistances.water}</td>
                <td> {waist.resistances.thunder}</td>
                <td> {waist.resistances.ice}</td>
                <td> {waist.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={waist} />
                </td>
            </tbody>
        )
    }
}
export default Waist