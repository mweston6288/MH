import React from "react";
import SkillDisplay from "../SkillDisplay";
import glovesLogo from "../../images/mhw-gauntlets.png"

function Gloves({gloves}) {
    if (!gloves) {
        return (
            <tbody>
                <td><img src={glovesLogo} alt="gloves" /></td>
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
                <td><img src={glovesLogo} alt="gloves" /></td>
                <td>{gloves.name}</td>
                <td>{gloves.defense.base}</td>
                <td> {gloves.resistances.fire}</td>
                <td> {gloves.resistances.water}</td>
                <td> {gloves.resistances.thunder}</td>
                <td> {gloves.resistances.ice}</td>
                <td> {gloves.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={gloves} />
                </td>
            </tbody>
        )
    }
}
export default Gloves