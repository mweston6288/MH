import React, { useState, useEffect } from "react"
import SelectArmor from "../components/selectArmor"
import { useSearchContext } from "./searchContext"
import Form from "react-bootstrap/Form"
import Axios from "axios"


// This will display recommended skills in an accordion component.
// Click on the component to show a list of armors
const Recommend = () => {
    const [{skills, hunterRank, masterRank}] = useSearchContext();
    const [skill, setSkill] = useState();
    const [allSkills,setAllSkills] = useState([]);
    useEffect(()=>{
        Axios.get("https://mhw-db.com/skills")
        .then(response=>{
            setAllSkills(response.data);
        })
        setSkill();
    }, [skills])
    const updateSkill = event=>{
        setSkill(event.target.value);
    }
    return(
        <div>
            {skills.length > 0 &&
            <Form.Group>
                <Form.Label>Recommended Skills</Form.Label>
                <Form.Control as="select" onChange={updateSkill}>
                    {!skill &&<option disabled selected hidden>Skills</option>}
                    {skills.map(skill => (
                        <option>{skill.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            }
            {/*}
            <Form.Group>
                <Form.Label>All Skills</Form.Label>
                <Form.Control as="select" onChange={updateSkill}>
                    {!skill && <option disabled selected hidden>Skills</option>}
                    {allSkills.map(skill => (
                        <option>{skill.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
                    */}

            {skill &&
            <SelectArmor HR={hunterRank} MR={masterRank} skill={skill} />
            }
        </div>
    )
}
export default Recommend