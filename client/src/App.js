import React from 'react';
import './App.css';
import RankTabs from "./utils/rankTabs"
import ArmorContext from "./utils/armorContext"

function App() {
	const armorContext={
		head: null,
		chest: null,
		waist: null,
		gloves: null,
		legs: null	
	}
  return (
	<div>
		<ArmorContext.Provider value={armorContext}>
			  <RankTabs />
		</ArmorContext.Provider>
	</div>
  );
}

export default App;
