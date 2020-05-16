import React, { useState } from "react";
import MonsterSelector from "../components/MonsterSelector"
import HR from "../components/HR"
import MR from "../components/MR"
import Form from "react-bootstrap/Form"
import * as apis from "../api/monsterAPI.js"
import Recommend from "./recommend"

// Creates the user search and results states.
const SearchContext = ({rank})=>{
	// The state of the user's inputs
	// updates when any search parameter is changed
	const [searchState, setSearchState] = useState({
		monster:"",
		hunterRank:0,
		masterRank:0,
	});
	const [skills, setSkills]= useState([]);

	// Update the searchState fields.
	// These methods are passed to their respective components
	const updateMonster = (event)=>{
		setSearchState({...searchState, monster: event.target.value})
	};
	const updateHunterRank = (event) => {
		const value = event.target.value.split("-")
		setSearchState({ ...searchState, hunterRank: value[0]});
	};
	const updateMasterRank = (event) => {
		const value = event.target.value.split("-")
		setSearchState({ ...searchState, masterRank: value[0] })
	}
	// Take the search state and use it to find all armors that fit
	// the requirements. Currently filters armor by skills in the monster's "ailments.protection"
	// field.
	const getResponse = async (event)=>{
		event.preventDefault();
		if(searchState.monster){
			try {
				// Get the full details on the monster I'm looking for
				// and set skills to the recommended skills
				const res = await apis.getMonster(searchState.monster);
				setSkills(res.data[0].skills)
			}catch(err){
				console.log(err);
			}
		}
	}
	// Depending on what rank was received will determine the form users have to fill
	return(
		<div>
			<Form onSubmit={getResponse}>
				<Form.Group>
					{rank === "MR" ? 
						<MR updateMasterRank={updateMasterRank} />
						:
						<HR updateHunterRank={updateHunterRank} rank={rank}/>
					}
					<MonsterSelector updateMonster={updateMonster} HR={searchState.hunterRank} MR={searchState.masterRank} rank={rank}/>
					<button type="submit">Submit</button>
				</Form.Group>
			</Form>
			{skills.map(skill=>(
				<Recommend skill={skill} MR ={searchState.masterRank} HR={searchState.hunterRank}/>
			))}
		</div>
	)
}
export default SearchContext;
