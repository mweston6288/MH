import React, { useState } from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import SelectArmor from "./selectArmor"
import { useSearchContext } from "./searchContext"
import Form from "react-bootstrap/Form"

// This will display recommended skills in an accordion component.
// Click on the component to show a list of armors
const Recommend = () => {
    const [{skills, hunterRank, masterRank}] = useSearchContext();
    const [skill, setSkill] = useState();
    const updateSkill = event=>{
        setSkill(event.target.value);
        console.log(skill)
    }
    return(
        <div>
            <Form.Group>
                <Form.Control as="select" onChange={updateSkill}>
                    <option disabled hidden>Skills</option>
                    {skills.map(skill => (
                        <option>{skill.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            {skill &&
            <SelectArmor HR={hunterRank} MR={masterRank} skill={skill} />
            }
{/*        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey={skill.id}>
                        {skill.name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={skill.id}>
                    <Card.Body>
                        <SelectArmor HR={hunterRank} MR={masterRank} skill={skill}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
</Accordion>*/}
        </div>
    )
}
export default Recommend