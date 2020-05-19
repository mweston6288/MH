import React from 'react';
import RankTabs from "../utils/rankTabs"
import { useUserContext } from "../utils/userContext";
import { Link } from 'react-router-dom';
import ArmorDisplay from '../components/armorDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Recommend from '../utils/recommend';

// The main page where users can create a build
// Right now, everything happens to be under the rank tabs but
// I'll reorganize it later.
function Home() {
	const [state, dispatch] = useUserContext();

	const handleLogout = event=>{
		event.preventDefault();
		dispatch({type:"logout"})
	}
	return (
		<div>
			{// Display option to log in or view builds depending on login status
			// TODO: add a logout feature.
			state.authenticated ?

				<Container>
					<Row>
						<Col md={{span: 2, offset:7}}>
							<a>Hello {state.userName}</a>
						</Col>
						<Col md={{ span: 2}}>
							<Link to="/builds">Your Builds</Link>
						</Col>
						<Col>
							<a href="#" onClick={handleLogout}>Logout</a>
						</Col>
					</Row>
				</Container>
				:
				<Container>
					<Row>
						<Col md={{ span: 1, offset: 11 }}>
							<Link to="/login">Log in</Link>
						</Col>
					</Row>
				</Container>
			}
			<Container>
				<Row>
					<Col md={{span:10, offset:1}}>
						<RankTabs />
					</Col>
				</Row>
				<Row>
					<Col md={{span:6}}>
						<Recommend/>
					</Col>
					<Col>
						<ArmorDisplay />
					</Col>
				</Row>
			</Container>


		</div>
	);
}

export default Home;
