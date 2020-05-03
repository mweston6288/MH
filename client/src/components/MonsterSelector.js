import React, { useState, useEffect } from "react";
import * as apis from "../api/index.js"
import Form from "react-bootstrap/Form"
function MonsterSelector(props){
    const [monsterList,setMonsterList]=useState([]);
    const [list,setList]=useState(0);

    useEffect(()=>{
        apis.getMonsterList().then(res=>{
            setMonsterList(res.data);
            console.log(monsterList)
        })
    },[list])

    return(
            <Form.Group>
                <Form.Label>Select Monster</Form.Label>
                <Form.Control as="select" custom defaultValue="Monster" onChange={props.updateMonster}>
                    <option disabled hidden>Monster</option>
                    {monsterList.map(monster=>(
                        <option key={monster.id}id={monster.id}>{monster.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
    )
}
export default MonsterSelector;