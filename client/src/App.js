import React from 'react';
import './App.css';
import SearchState from "./utils/searchState"
import RankTabs from "./components/rankTabs"

function App() {
  return (
	<div>
		<RankTabs/>
		<SearchState/>
	</div>
  );
}

export default App;
