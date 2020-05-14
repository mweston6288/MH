import React from "react";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../utils/userContext";
import { useArmorContext } from "../utils/armorContext";
import API from "../api/userAPI.js"

// Creates a button that saves user created builds
function SaveButton() {
	const [armorState] = useArmorContext();
	const [userState] = useUserContext();

	const saveBuild = (event)=>{
		event.preventDefault();
		API.saveBuild(userState.userName, armorState);
	}
	return (
		<Button onClick={saveBuild}>
			Save
		</Button>
	)
}
export default SaveButton;