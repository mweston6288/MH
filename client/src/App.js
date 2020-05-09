import React from 'react';
import './App.css';
import RankTabs from "./utils/rankTabs"
import ArmorContext from "./utils/armorContext"

function App() {
  return (
	<div>
		<ArmorContext.Provider>
			  <RankTabs />
		</ArmorContext.Provider>
	</div>
  );
}

export default App;
