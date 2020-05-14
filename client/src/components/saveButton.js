import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useArmorContext } from "../utils/armorContext";
import API from "../api/userAPI.js"


function SaveButton() {
	const [state] = useArmorContext();

	const saveBuild = (event)=>{
		event.preventDefault();
		API.saveBuild(state);
	}
	return (
		<Button onClick={saveBuild}>
			Save
		</Button>
	)
}
export default SaveButton;