import React, { useState, useEffect } from "react";
import * as apis from "../api/monsterAPI.js"
import Form from "react-bootstrap/Form"
import { useSearchContext } from "../utils/searchContext.js";

// Make a drop menu of monsters to hunt.
// Currently uses the monster hunter API but I'll migrate this to my own database
// later.
function MonsterSelector(){
    // Stores the list of monsters
    const [monsterList,setMonsterList]=useState([]);
    const [{ monster,hunterRank, masterRank, rank }, dispatch] = useSearchContext();

    // Get monsters from the database and set them into the monsterlist
    // ranks will determine which api search to use
    useEffect(()=>{
        if (rank==="LR"){
            apis.getLRMonsterList(hunterRank).then(res => {
                setMonsterList(res.data);
            }).catch(err => {
                console.log(err)
            })
        }else if (rank==="HR"){
            apis.getHRMonsterList(hunterRank).then(res => {
                setMonsterList(res.data);
            }).catch(err => {
                console.log(err)
            })
        }else{
            apis.getMRMonsterList(masterRank).then(res => {
                setMonsterList(res.data);
            }).catch(err => {
                console.log(err)
            })
        }

    },[hunterRank, masterRank, rank])
    // update the search context's monster
    const updateMonster = (event) => {
        dispatch({ type: "updateMonster", monster: event.target.value })
    };
    return(
        <Form.Group>
            <Form.Label>Select Monster</Form.Label>
            <Form.Control as="select" custom defaultValue="Monster" onChange={updateMonster}>
                {!monster && <option disabled selected hidden>Monster</option>}
                {monsterList.map(monster=>(
                    <option key={monster._id}>{monster.name}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )
}
export default MonsterSelector;