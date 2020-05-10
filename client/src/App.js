import React from 'react';
import './App.css';
import RankTabs from "./utils/rankTabs"
import {ArmorProvider} from "./utils/armorContext"

function App() {

  return (
	<div>
		<div>Test</div>
		<ArmorProvider>
			  <RankTabs />
		</ArmorProvider>
	</div>
  );
}

export default App;
