import React from 'react';
import RankTabs from "../utils/rankTabs"
import { useUserContext } from "../utils/userContext";
import { Link } from 'react-router-dom';
import ArmorDisplay from '../components/armorDisplay';

// The main page where users can create a build
// Right now, everything happens to be under the rank tabs but
// I'll reorganize it later.
function Home() {
	const [state] = useUserContext();
	return (
		<div>
			{// Display option to log in or view builds depending on login status
			// TODO: add a logout feature.
			state.authenticated ?
				<div>
					<div>Hello {state.userName}</div>
					<Link to="/builds">View Builds</Link>
				</div>
				:
				<Link to="/login">Log in</Link>
			}
			<RankTabs />
			<ArmorDisplay/>

		</div>
	);
}

export default Home;
