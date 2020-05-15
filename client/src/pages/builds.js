import React, { useState, useEffect } from 'react';
import { useUserContext } from '../utils/userContext';
import { Redirect, Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import API from '../api/userAPI';

function Builds(){
	const [userState] = useUserContext();
	const [builds, setBuilds] = useState([]);
	useEffect(()=>{
		API.getBuilds(userState._id)
		.then(response=>{
			setBuilds(response.data);
			console.log(response);
		})		
	}, []);
	console.log(builds);

	return(
		<div>
			{ userState.authenticated ?
			<div>
				<Link to="/">
					Return
				</Link>
				{builds.map(build=>(
				<Accordion>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Card.Header}>
								{build._id}
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse>
							<Card.Body>

							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				))}
				</div>

				:
				<Redirect to="/login"/>
			}
		</div>
	)
}
export default Builds;