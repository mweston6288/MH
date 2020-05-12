import React, {useRef} from 'react';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
import API from '../api/userAPI';

// User login page. User will need to log in to save builds.
function Login() {
	const userRef = useRef();
	const passwordRef = useRef();
	// Make an API call when form is submitted
	const handleFormSubmit = event=>{
		event.preventDefault();
		API.getUser({
			userName: userRef.current.value,
			password: passwordRef.current.value
		}).then(response=>{
			console.log(response);
		})
	}
	return (
		<Container>
			<Form onSubmit={handleFormSubmit}>
				<Form.Group>
					<Form.Label>
						username
					</Form.Label>
					<Form.Control required ref={userRef} type="text" placeholder="username"/>
				</Form.Group>
				<Form.Group>
					<Form.Label>
						password
					</Form.Label>
					<Form.Control required ref={passwordRef} type="password" placeholder="password"/>
				</Form.Group>
				<Form.Group>
					<Button type="submit">Submit</Button>
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
