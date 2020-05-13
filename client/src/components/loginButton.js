import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function LoginButton(){
	return(
		<Link to = "/login">
			<Button>
				Log in to save builds
			</Button>
		</Link >
	)
}
export default LoginButton;