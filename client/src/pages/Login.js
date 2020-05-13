import React, {useRef} from 'react';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
import API from '../api/userAPI';
import { PromiseProvider } from 'mongoose';

// User login page. User will need to log in to save builds.
function Login(props) {
	const userRef = useRef();
	const passwordRef = useRef();
	// Make an API call when form is submitted
	const handleFormSubmit = event=>{
		event.preventDefault();
		API.getUser({
			userName: userRef.current.value,
			password: passwordRef.current.value
		// If login is successful, redirect. For now, it's redirecting
		// to the main page.
		}).then(response=>{
			console.log(response)
			if (response.data.status === "Success"){
				props.history.push("/")
			}
		})
	}
	return (
		<Container>
			<Form onSubmit={handleFormSubmit}>
				<Form.Group>
					<Form.Label>
						Username
					</Form.Label>
					<Form.Control required ref={userRef} type="text" placeholder="username"/>
				</Form.Group>
				<Form.Group>
					<Form.Label>
						Password
					</Form.Label>
					<Form.Control required ref={passwordRef} type="password" placeholder="password"/>
				</Form.Group>
				<Form.Group>
					<Button type="submit">Submit</Button>
				</Form.Group>
			</Form>
			<Link to="/">Return</Link>
			<div>
				Don't have an account? 
				<Link to="/signup"> Sign up</Link>
			</div>
		</Container>
	);
}

export default Login;
