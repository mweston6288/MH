import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/userContext";

function SaveButton() {
	const [state] = useUserContext();
	// If no one is logged in, display a log in button
	// Otherwise display the user's name
	return (
		<Button>
			Save
		</Button>
	)
}
export default SaveButton;