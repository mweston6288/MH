import React from 'react';
import RankTabs from "../utils/rankTabs"
import LoginButton from "../components/loginButton"
import { useUserContext } from "../utils/userContext";
import SaveButton from "../components/saveButton"
import { Link } from 'react-router-dom';

// The main page where users can create a build
// Right now, everything happens to be under the rank tabs but
// I'll reorganize it later.
function Home() {
	const [state] = useUserContext();
	return (
		<div>
			{state.authenticated ?
				<div>
					<SaveButton />
					<Link to="/builds">Test</Link>
				</div>
				:
				<LoginButton />
			}
			<RankTabs />
		</div>
	);
}

export default Home;
