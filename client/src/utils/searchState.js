import React, { useState } from "react";
import MonsterSelector from "../components/MonsterSelector"
import HR from "../components/HR"
import MR from "../components/MR"

const SearchContext = ()=>{
	const [searchState, setSearchState] = useState({
		monster:"",
		hunterRank:"",
		masterRank:"",
	});

	const updateMonster = (event)=>{
		setSearchState({...searchState, monster: event.target.value})
		console.log(searchState);
	};
	const updateHunterRank = (event) => {
		setSearchState({ ...searchState, hunterRank: event.target.value })
	};
	const updateMasterRank = (event) => {
		setSearchState({ ...searchState, masterRank: event.target.value })
	}

	return(
		<div>
			<MonsterSelector updateMonster={updateMonster}/>
			<HR updateHunterRank={updateHunterRank}/>
			<MR updateMasterRank={updateMasterRank}/>
		</div>
	)
}
export default SearchContext;
