import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import SelectArmor from "./selectArmor"

// This will display recommended skills in an accordion component.
// Click on the component to show a list of armors
const Recommend = ({skill, HR, MR}) => {
    console.log(skill)
    let rank;
    console.log(rank);
    return(
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey={skill.id}>
                        {skill.name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={skill.id}>
                    <Card.Body>
                        <SelectArmor HR={HR} MR={MR} skill={skill}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
export default Recommend