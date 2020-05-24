import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import BuildDisplay from "./buildDisplay";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

// Creates an accordion component that displays a saved build when opened
function SavedBuild({build, history}){
	// A state of whether or not this build has been opened previously
	// If this is false, buildDisplay will look up the armor elements
	const [search,setState] = useState(false);

	const handleClick = event=>{
		event.preventDefault();
		setState(true);
	}
	return(
		<div>
			<Row>
				<Col sm={{span:1}}>
					<Container>
						<Row style={{float:"right"}}>
							<i class="fa fa-angle-up" style={{fontSize:"2em"}}/>
						</Row>
						<Row style={{ clear: "both",float: "right" }}>
							<i class="fa fa-angle-down" style={{ fontSize:"2em" }}/>
						</Row>
					</Container>
				</Col>
				<Col>
				<Accordion>
					<Card>
						<Card.Header onClick={handleClick}>
							<Accordion.Toggle as={Card.Header} eventKey={build._id}>
								{build.name}
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey={build._id}>
							<Card.Body>
								<BuildDisplay build={build} history={history} search={search} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				</Col>
			</Row>
	
		</div>

	)
}
export default SavedBuild;