import React, { useState } from "react";
import MonsterSelector from "../components/MonsterSelector"
import HR from "../components/HR"
import MR from "../components/MR"
import ArmorDisplay from "../components/armorDisplay"
import Form from "react-bootstrap/Form"
import * as apis from "../api/index.js"
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
	// The state of the search results
	// Updates when submit is pressed
	const [recommendedArmor, setRecommendedArmor] = useState({
		head: null,
		chest: null,
		waist: null,
		gloves: null,
		legs: null
	})

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
	// Updates the recommended Armor
	// Takes in an array of armor objects
	const updateArmor = (armor)=>{
		// These variables are used to store the currently "best" armor in each field.
		let head = null;
		let chest = null;
		let gloves = null;
		let waist = null;
		let legs = null;
		for (let i=0; i < armor.length; i++){
			// Get the type of armor and compare it to the current armor saved in the above variables
			// Set it if there is no option or if the armor is better
			// Currently, the only consideration is highest base defense
			const type = armor[i].type;
			switch(type){
				case "head":
					if (!head || head.defense.base < armor[i].defense.base){
						head = armor[i]
					}
					break;
				case "chest":
					if (!chest || chest.defense.base < armor[i].defense.base) {
						chest = armor[i]
					}
					break;
				case "gloves":
					if (!gloves || gloves.defense.base < armor[i].defense.base) {
						gloves = armor[i]
					}
					break;
				case "waist":
					if (!waist || waist.defense.base < armor[i].defense.base) {
						waist = armor[i]
					}
					break;
				case "legs":
					if (!legs || legs.defense.base < armor[i].defense.base) {
						legs = armor[i]
					}	
					break;
				default:
			}
			
		}
		// Set the recommended armor to the values of the armor piece variables
		setRecommendedArmor({...recommendedArmor, head: head, gloves: gloves, waist: waist, legs: legs, chest: chest})
	}
	// Take the search state and use it to find all armors that fit
	// the requirements. Currently filters armor by skills in the monster's "ailments.protection"
	// field. Due to various gaps and challenges with the API, I'll need to build part of this in my own database
	const getResponse = async (event)=>{
		let armors=[]; // array of all armors that have a skill I'm looking for
		if(searchState.monster){
			event.preventDefault();
			try {
				// Get the full details on the monster I'm looking for
				// and set skills to the recommended skills
				const res = await apis.getMonster(searchState.monster);
				setSkills(res.data[0].skills)
				console.log(skills);	
				/*for(let i=0;i<res.data[0].skills.length;i++){
					// Get the recommended skills section
					const skill=res.data[0].skills[i]
					try{
					// Get the armor pieces that have that skill
					const res = await apis.getArmor(searchState.hunterRank, searchState.masterRank, skill)
						// Add results to the array
						res.data.forEach(armor => {
							armors.push(armor)
						})
					}catch(err){
						console.log(err)
					}
				}*/
			}catch(err){
				console.log(err);
			}
			//updateArmor(armors);
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
			<ArmorDisplay armor={recommendedArmor}/>
		</div>
	)
}
export default SearchContext;
