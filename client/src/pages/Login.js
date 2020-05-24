import React, {useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
import API from '../api/userAPI';
import Alert from "react-bootstrap/Alert";
import {useUserContext} from "../utils/userContext";

// User login page. User will need to log in to save builds.
function Login(props) {
	const [state, dispatch] = useUserContext();

	// Track if login failed
	const [loginStatus, setLoginStatus] = useState({
		failure: false
	});

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
			if (response.data.status === "Success"){
				dispatch({userName: response.data.userName, _id:response.data._id, buildCount: response.data.buildCount})
				props.history.push("/")
			}else{
				setLoginStatus({failure:true});
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
			<div>
				{
					loginStatus.failure &&
					<Alert variant="danger">
						Incorrect Username or Password
					</Alert>
				}
			</div>

			<Link to="/">Return</Link>
			<div>
				Don't have an account? 
				<Link to="/signup"> Sign up</Link>
			</div>
		</Container>
	);
}

export default Login;
