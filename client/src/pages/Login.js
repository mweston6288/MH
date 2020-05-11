import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom"

// User login page. User will need to log in to save builds.
// Currently doesn't do anything
function Login() {
	return (
		<Container>
			<Form>
				<Form.Group>
					<Form.Label>
						username
					</Form.Label>
					<Form.Control type="text" placeholder="username"/>
				</Form.Group>
				<Form.Group>
					<Form.Label>
						password
					</Form.Label>
					<Form.Control type="password" placeholder="password"/>
				</Form.Group>
			</Form>
			<Link to="/">Return</Link>
			<div>
				Dont have an account? 
				<Link to="/signup"> Sign up</Link>
			</div>
		</Container>
	);
}

export default Login;
