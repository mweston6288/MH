import React, { useState, useEffect} from 'react';
import { useUserContext } from '../utils/userContext';
import { Redirect, Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import API from '../api/userAPI';
import BuildDisplay from "../components/buildDisplay"
import SavedBuild from '../components/savedBuild';
import Container from 'react-bootstrap/Container';

// Main page for the user's saved builds
function Builds(props){
	const [userState] = useUserContext();
	const [builds, setBuilds] = useState([]);
	// Get the user builds and store them in an array
	useEffect(()=>{
		API.getBuilds(userState._id)
		.then(response=>{
			setBuilds(response.data);
		})
	}, [userState._id]);

	return(
		<div>
			{ // If user is not signed in, redirect to the login page
			// BuildDisplay needs the props history in order to redirect to / 
			// when user wants to edit a build
			userState.authenticated ?
			<div>
				<Link to="/">
					Return
				</Link>
				<Container>
					<div>
					{builds.map(build=>(
						<SavedBuild build={build} history={props.history}/>
					))}
							</div>
				</Container>
			</div>
				:
				<Redirect to="/login"/>
			}
		</div>
	)
}
export default Builds;