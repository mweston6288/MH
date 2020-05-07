import React, { useState, useEffect } from "react";
import * as apis from "../api/index.js"
import Form from "react-bootstrap/Form"

// Make a drop menu of monsters to hunt.
// Currently uses the monster hunter API but I'll migrate this to my own database
// later.
function MonsterSelector({HR,MR, updateMonster}){
    // Stores the list of monsters
    const [monsterList,setMonsterList]=useState([]);

    // Get all monsters from the database and set them into the monsterlist
    useEffect(()=>{
        apis.getMonsterList(HR, MR).then(res=>{
            setMonsterList(res.data);
        }).catch(err=>{
            console.log(err)
        })
    },[HR, MR])

    return(
        <Form.Group>
            <Form.Label>Select Monster</Form.Label>
            <Form.Control as="select" custom defaultValue="Monster" onChange={updateMonster}>
                <option disabled hidden>Monster</option>
                {monsterList.map(monster=>(
                    <option key={monster._id}>{monster.name}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )
}
export default MonsterSelector;