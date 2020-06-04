import React from "react";
import SkillDisplay from "../SkillDisplay";
import chestLogo from "../../images/mhw-chest.png"

function Chest({chest}) {
    // Default appearance
    if (!chest) {
        return (
            <tbody>
                <td><img src={chestLogo} alt="chest" /></td>

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
                <td><img src={chestLogo} alt="chest" /></td>
                <td>{chest.name}</td>
                <td>{chest.defense.base}</td>
                <td> {chest.resistances.fire}</td>
                <td> {chest.resistances.water}</td>
                <td> {chest.resistances.thunder}</td>
                <td> {chest.resistances.ice}</td>
                <td> {chest.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={chest} />
                </td>
            </tbody>
        )
    }
}
export default Chest;