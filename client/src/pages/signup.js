import React, {useRef, useState}from 'react';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import API from "../api/userAPI";
import Alert from "react-bootstrap/Alert";
import { useUserContext } from "../utils/userContext";


// User sign up page. User will need to log in to save builds.
// Currently doesn't do anything
const SignUp = (props)=>{
	const [state, dispatch] = useUserContext();

	// track if signup failed for some reason
	// Used to spawn an alert if either is true
	const [loginStatus, setLoginStatus] = useState({
		UserFail: false,
		PasswordFail: false
	})

	const userRef = useRef();
	const passwordRef = useRef();
	const confirmRef = useRef();

	// Create a new user
	const handleFormSubmit= (event)=>{
		event.preventDefault();
		// Confirm password fields match
		if (passwordRef.current.value !== confirmRef.current.value){
			setLoginStatus({ UserFail: false, PasswordFail: true })
			return;
		}
		// Call the create user function
		API.createUser({
			userName: userRef.current.value,
			password: passwordRef.current.value
		// Update the user status and redirect if successful
		}).then(response=>{
			if (response.data.status === "Success"){
				dispatch({ userName: response.data.userName, _id: response.data._id })
				props.history.push("/")
			}else{
				setLoginStatus({UserFail:true, PasswordFail:false})
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
			<div>
				{
					loginStatus.UserFail &&
					<Alert variant="danger">
						Username already taken
					</Alert>
				}
			</div>
			<div>
				{
					loginStatus.PasswordFail &&
					<Alert variant="danger">
						Password fields do not match
					</Alert>
				}
			</div>

			<Link to="/">Return</Link>
			<div>
				Already have an account? 
				<Link to="/login">Log in</Link>
			</div>
		</Container>
	);
}

export default SignUp;
