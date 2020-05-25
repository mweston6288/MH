import React, { useState, useEffect} from 'react';
import { useUserContext } from '../utils/userContext';
import { Redirect, Link } from 'react-router-dom';
import API from '../api/userAPI';
import SavedBuild from '../components/savedBuild';
import Container from 'react-bootstrap/Container';

// Main page for the user's saved builds
function Builds(props){
	const [userState] = useUserContext();
	const [builds, setBuilds] = useState([]);
	const [updateNeeded, setUpdateNeeded] = useState(true);
	// Get the user builds and store them in an array
	useEffect(()=>{
		console.log(updateNeeded)
		// Only  run if length is 0 AND no search was previously done
		// TODO: make boolean and set it to what's needed
		if(updateNeeded && builds.length === 0){
			console.log("Test")
			API.getBuilds(userState._id)
				.then(response => {
					setBuilds(response.data);
					setUpdateNeeded(false)
				})
		// Will only update the builds that got swapped
		}else if (updateNeeded){
			console.log(updateNeeded);
			setUpdateNeeded(false);
		}

	
	}, [updateNeeded]);
	const handleUpClick = event => {
		event.preventDefault();
		console.log(event.target.getAttribute("data-value"))
		const index = event.target.getAttribute("data-value");
		let newBuilds = builds;
		let temp = newBuilds[index];
		newBuilds[index] = newBuilds[index-1];
		newBuilds[index-1] = temp;
		setBuilds(newBuilds)
		setUpdateNeeded(true)
		console.log(builds)
	}
	const handleDownClick = event => {
		event.preventDefault();
		let index = event.target.getAttribute("data-value");
		index = parseInt(index, 10);
		let newBuilds = builds;
		let temp = newBuilds[index];
		newBuilds[index] = newBuilds[index + 1];
		newBuilds[index + 1] = temp;
		setBuilds(newBuilds)
		setUpdateNeeded(true)
		console.log(builds)
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
					{builds.map((build, index)=>(
						<SavedBuild build={build} dataId={index} last ={builds.length-1} history={props.history} handleUpClick={handleUpClick} handleDownClick={handleDownClick}/>
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