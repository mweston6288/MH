import React from "react";
import SkillDisplay from "../SkillDisplay";
import headLogo from "../../images/mhw-head.png"

function Head({head}){
    if (!head){
        return (
            <tbody>
                <td><img src={headLogo} alt="head" /></td>
                <td>None selected</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>
                    <SkillDisplay armor={head}/>
                </td>
            </tbody>
        )
    }else{
        return(
            <tbody>
                <td><img src={headLogo} alt="head" /></td>
                <td>{head.name}</td>
                <td>{head.defense.base}</td>
                <td> {head.resistances.fire}</td>
                <td> {head.resistances.water}</td>
                <td> {head.resistances.thunder}</td>
                <td> {head.resistances.ice}</td>
                <td> {head.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={head} />
                </td>
            </tbody>
        )
    }
}
export default Head;