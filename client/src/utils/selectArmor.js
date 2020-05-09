import React, {useState, useEffect} from "react"
import {getArmor} from "../api/index.js"

const SelectArmor = ({HR, MR, skill})=>{
    const [armors, setArmors] = useState([]);
    // Get the list of armors that fit the given restrictions and add them into the armor state
    useEffect(()=>{ // useEffect is being used because otherwise, this will run infinitely
        getArmor(HR, MR, skill)
            .then(res => {
                const armorList = []
                console.log(res);
                res.data.forEach(armor => {
                    armorList.push(armor);
                })
                setArmors(armorList);
            });        
    }, [skill])
    return (
        <div>
            {armors.map(armor=>(
                <div>{armor.name}</div>
            ))}
        </div>
    )
}

export default SelectArmor