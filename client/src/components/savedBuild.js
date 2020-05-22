import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import BuildDisplay from "./buildDisplay";

function SavedBuild({build, history}){
	const [state,setState] = useState(false);

	const handleClick = event=>{
		event.preventDefault();
		setState(true);
	}
	return(
		<Accordion>
			<Card>
				<Card.Header onClick={handleClick}>
					<Accordion.Toggle as={Card.Header} eventKey={build._id}>
						{build.name}
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey={build._id}>
					<Card.Body>
						<BuildDisplay build={build} history={history} search={state} />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	)
}
export default SavedBuild;