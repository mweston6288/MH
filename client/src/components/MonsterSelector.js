import React, { useState, useEffect } from "react";
import * as apis from "../api/index.js"
import Form from "react-bootstrap/Form"
function MonsterSelector(){
    const [monsterList,setMonsterList]=useState([]);
    const [list,setList]=useState(0);

    useEffect(()=>{
        apis.getMonsterList().then(res=>{
            setMonsterList(res.data);
            console.log(monsterList)
        })
    },[list])

    return(
        <Form>
            <Form.Group>
                <Form.Label>Select Monster</Form.Label>
                <Form.Control as="select" custom>
                    {monsterList.map(monster=>(
                        <option>{monster.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
        </Form>
    )
}
export default MonsterSelector;