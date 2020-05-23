import React from "react";
import Head from "./armors/head"
import Chest from "./armors/chest"
import Gloves from "./armors/gloves"
import Waist from "./armors/waist"
import Legs from "./armors/legs"
import Total from "./armors/total"
import {useArmorContext} from "../utils/armorContext"
import SaveButton from "./saveButton"
import { useUserContext } from "../utils/userContext";
import LoginButton from "./loginButton";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import def from "../images/mhw-defense_s.png"
import fire from "../images/mhw-fire-damage_s.png"
import water from "../images/mhw-water-elemental-damage_s.png"
import ice from "../images/mhw-ice-damage_s.png"
import thunder from "../images/mhw-thunder-damage_s.png"
import dragon from "../images/mhw-dragon-damage_s.png"

// Display the selected armor. Displays name, skills and stats
function ArmorDisplay(){
    const [{armor, name}, dispatch] = useArmorContext();
    const [user] = useUserContext();
    // Update build name in ArmorContext
    function handleChange(event){
        event.preventDefault();
        dispatch({type:"name", name: event.target.value})
    }
    // Reset the build
    function handleReset(event){
        event.preventDefault();
        dispatch({type:"reset"});
    }
    return(
        <div>
            <input type="text" onChange={handleChange} value={name} />
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th><img src={def} title="defense" alt="defense"/></th>
                        <th><img src={fire} title="fire resistance" alt="fire"/></th>
                        <th><img src={water} title="water resistance" alt="water"/></th>
                        <th><img src={thunder} title="thunder resistance" alt="thunder"/></th>
                        <th><img src={ice} title="ice resistance" alt="ice"/></th>
                        <th><img src={dragon} title="dragon resistance" alt="dragon"/></th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <Head head={armor.head} />
                <Chest chest={armor.chest} />
                <Gloves gloves={armor.gloves} />
                <Waist waist={armor.waist} />
                <Legs legs={armor.legs} />
            </Table>
            <Total />
            {// User can only save builds if logged in
                user.authenticated ? 
                    <SaveButton/>
                    :
                    <LoginButton/>        
            }
            <Button onClick={handleReset}>Reset</Button>
        </div>
    )
}
export default ArmorDisplay;