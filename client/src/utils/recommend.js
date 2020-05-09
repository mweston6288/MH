import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

// This will display recommended skills in an accordion component.
// Click on the component to show a list of armors
const Recommend = ({skill}) => {
    console.log(skill)
    return(
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey={skill.id}>
                        {skill.name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={skill.id}>
                    <Card.Body>Test</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
export default Recommend