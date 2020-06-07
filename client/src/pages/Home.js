import React from 'react';
import RankTabs from "../utils/rankTabs"
import { useUserContext } from "../utils/userContext";
import { Link } from 'react-router-dom';
import ArmorDisplay from '../components/armorDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Recommend from '../utils/recommend';
import Button from 'react-bootstrap/Button';
import { useArmorContext } from '../utils/armorContext';
import { useSearchContext } from '../utils/searchContext';
import { useAlertContext } from '../utils/alertContext';
import Alert from 'react-bootstrap/Alert';

// The main page where users can create a build
// Right now, everything happens to be under the rank tabs but
// I'll reorganize it later.
function Home() {
	const [state, dispatch] = useUserContext();
	const [armor, armorDispatch] = useArmorContext();
	const [search, searchDispatch] = useSearchContext();
	const [alert] = useAlertContext();
	const handleLogout = event=>{
		event.preventDefault();
		dispatch({type:"logout"});
		armorDispatch({type:"reset"});
		searchDispatch({type:"reset"})
	}
	console.log(alert);
	return (
		<div>
			{alert.show &&
			<Alert className="build-err-alert" variant={alert.variant}>
				{alert.message}
			</Alert>}
			{// Display option to log in or view builds depending on login status
			// TODO: add a logout feature.
			state.authenticated ?

				<Container>
					<Row>
						<Col md={{span: 2, offset:7}}>
							<div>Hello {state.userName}</div>
						</Col>
						<Col md={{ span: 2}}>
							<Link to="/builds">Your Builds</Link>
						</Col>
						<Col>
							<Button onClick={handleLogout} variant="link">Logout</Button>
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
					<Col md={{span:3}}>
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
