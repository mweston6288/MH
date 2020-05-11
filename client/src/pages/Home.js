import React from 'react';
import RankTabs from "../utils/rankTabs"
import LoginButton from "../components/loginButton"

// The main page where users can create a build
// Right now, everything happens to be under the rank tabs but
// I'll reorganize it later.
function Home() {
	return (
		<div>
			<LoginButton />
			<RankTabs />
		</div>
	);
}

export default Home;
