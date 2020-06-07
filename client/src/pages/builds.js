import React, { useState, useEffect} from 'react';
import { useUserContext } from '../utils/userContext';
import { Redirect, Link } from 'react-router-dom';
import API from '../api/userAPI';
import SavedBuild from '../components/savedBuild';
import Container from 'react-bootstrap/Container';
import Alert from "react-bootstrap/Alert";

// Main page for the user's saved builds
function Builds(props){
	const [userState, dispatch] = useUserContext();
	const [updateNeeded, setUpdateNeeded] = useState(true);
	// Get the user builds and store them in an array
	useEffect(()=>{
		// Only  run if length is 0 AND no search was previously done
		// TODO: make boolean and set it to what's needed
		if(updateNeeded && userState.authenticated){
			API.getBuilds(userState._id)
				.then(response => {
					dispatch({type: "builds", builds: response.data})
					setUpdateNeeded(false)
					response.data.forEach((build, index)=>{
						const buildNo = userState.buildCount - index
						API.updateBuildNo(build._id, buildNo)
					})
				})
		}
	
	}, [updateNeeded, userState.builds]);

	function swap(array,a,b){
		let temp = array[a];
		array[a] = array[b];
		array[b] = temp;

		temp = array[a].buildNo
		array[a].buildNo = array[b].buildNo;
		array[b].buildNo = temp;
		API.updateBuildNo(array[a]._id, array[a].buildNo)
		API.updateBuildNo(array[b]._id, array[b].buildNo)
	}
	const handleUpClick = event => {
		event.preventDefault();
		const index = event.target.getAttribute("data-value");
		let newBuilds = userState.builds;
		swap(newBuilds, index, index-1);
		dispatch({ type: "builds", builds: newBuilds })
	}
	const handleDownClick = event => {
		event.preventDefault();
		let index = event.target.getAttribute("data-value");
		index = parseInt(index, 10);
		let newBuilds = userState.builds;
		swap(newBuilds, index, index+1);
		dispatch({ type: "builds", builds: newBuilds })
	}
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
					{userState.builds.map((build, index)=>(
						<SavedBuild build={build} dataId={index} last ={userState.builds.length-1} history={props.history} handleUpClick={handleUpClick} handleDownClick={handleDownClick}/>
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