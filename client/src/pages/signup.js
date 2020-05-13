import React, {useRef}from 'react';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import API from "../api/userAPI";

// User sign up page. User will need to log in to save builds.
// Currently doesn't do anything
const SignUp = (props)=>{
	const userRef = useRef();
	const passwordRef = useRef();
	const confirmRef = useRef();

	// Create a new user
	const handleFormSubmit= (event)=>{
		event.preventDefault();
		// Confirm password fields match
		if (passwordRef.current.value !== confirmRef.current.value){
			console.log("Passwords don't match");
			return;
		}
		// Call the create user function
		API.createUser({
			userName: userRef.current.value,
			password: passwordRef.current.value
		// Update the user status and redirect if successful
		}).then(response=>{
			console.log(response)

			if (response.data.status === "Success"){
				console.log(response)
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
					<Form.Control required ref={userRef} type="text" placeholder="username" />
				</Form.Group>
				<Form.Group>
					<Form.Label>
						Password
					</Form.Label>
					<Form.Control required ref={passwordRef} type="password" placeholder="password" />
				</Form.Group>
				<Form.Group>
					<Form.Label>
						Confirm Password
					</Form.Label>
					<Form.Control required ref={confirmRef} type="password" placeholder="password" />
				</Form.Group>
				<Form.Group>
					<Button type="submit">Submit</Button>
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
