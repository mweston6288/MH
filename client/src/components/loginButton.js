import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import { useUserContext } from "../utils/userContext";

function LoginButton(){
	const [state] = useUserContext();
	// If no one is logged in, display a log in button
	// Otherwise display the user's name
	return(
		<div>
			{state.authenticated ? 
			<div>Hello {state.userName}</div>
			: 
			<Link to="/login">
				<Button>
					Log in to save builds
				</Button>
			</Link >
		}
		</div>
	)
}
export default LoginButton;