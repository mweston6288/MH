import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";

// User login page. User will need to log in to save builds.
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
		</Container>
	);
}

export default Login;
