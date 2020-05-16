import React from "react";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../utils/userContext";
import { useArmorContext } from "../utils/armorContext";
import API from "../api/userAPI.js"

// Creates a button that saves user created builds
function SaveButton(props) {
	const [armorState] = useArmorContext();
	const [userState, dispatch] = useUserContext();

	const saveBuild = (event)=>{
		event.preventDefault();
		const buildData = ({armor: armorState, name: props.name});
		API.saveBuild(userState.userName, buildData)
		.then(response=>{
			console.log(response)
		})
	}
	return (
		<Button onClick={saveBuild}>
			Save
		</Button>
	)
}
export default SaveButton;