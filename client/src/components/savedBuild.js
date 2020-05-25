import React, { useState, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import BuildDisplay from "./buildDisplay";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Creates an accordion component that displays a saved build when opened
function SavedBuild({build, dataId, last, history, handleUpClick, handleDownClick}){
	// A state of whether or not this build has been opened previously
	// If this is false, buildDisplay will look up the armor elements
	const [search,setState] = useState(false);
	console.log(last)

	const buildRef = useRef();
	const handleClick = event=>{
		event.preventDefault();
		setState(true);
	}
	return(
		<Row ref={buildRef} id={dataId}>
			<Col sm={{span:1}} style={{padding:"0px"}}>
				<Container>
					<Row style={{float:"right"}}>
						{dataId > 0 ?
							<Button variant="link" style={{padding:"0px"}} onClick={handleUpClick}>
								<i class="fa fa-angle-up" style={{ fontSize: "2em", color: "black" }} data-value={dataId}/>
							</Button>
							:
							<i class="fa fa-angle-up" style={{ fontSize: "2em", color: "black", visibility:"hidden" }} data-value={dataId} />
						}
					</Row>
					<Row style={{ clear: "both",float: "right" }}>
						{dataId < last &&
						<Button variant="link" style={{ padding: "0px" }} onClick={handleDownClick}>
							<i class="fa fa-angle-down" style={{ fontSize: "2em", color: "black" }} data-value={dataId}/>
						</Button>
						}
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
	
	)
}
export default SavedBuild;