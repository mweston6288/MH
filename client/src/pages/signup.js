import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"

// User sign up page. User will need to log in to save builds.
// Currently doesn't do anything
function SignUp() {
	return (
		<Container>
			<Form>
				<Form.Group>
					<Form.Label>
						Username
					</Form.Label>
					<Form.Control type="text" placeholder="username" />
				</Form.Group>
				<Form.Group>
					<Form.Label>
						Password
					</Form.Label>
					<Form.Control type="password" placeholder="password" />
				</Form.Group>
				<Form.Group>
					<Form.Label>
						Confirm Password
					</Form.Label>
					<Form.Control type="password" placeholder="password" />
				</Form.Group>
			</Form>
			<Link to="/">Return</Link>
			<div>
				Already have an account? 
				<Link to="/login">Log in</Link>
			</div>
		</Container>
	);
}

export default SignUp;
