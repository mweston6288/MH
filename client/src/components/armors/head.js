import React from "react";
import SkillDisplay from "../SkillDisplay";

function Head(props){
    if (!props.head){
        return (
            <tbody>
                <td>None selected</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>
                    <SkillDisplay armor={props.head}/>
                </td>
            </tbody>
        )
    }else{
        return(
            <tbody>
                <td>{props.head.name}</td>
                <td>{props.head.defense.base}</td>
                <td> {props.head.resistances.fire}</td>
                <td> {props.head.resistances.water}</td>
                <td> {props.head.resistances.thunder}</td>
                <td> {props.head.resistances.ice}</td>
                <td> {props.head.resistances.dragon}</td>
                <td>
                    <SkillDisplay armor={props.head} />
                </td>
            </tbody>
        )
    }
}
export default Head