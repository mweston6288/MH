import React, { useState } from "react";
import MonsterSelector from "../components/MonsterSelector"
import HR from "../components/HR"
import MR from "../components/MR"
import ArmorDisplay from "../components/armorDisplay"
import Axios from "axios"
import Form from "react-bootstrap/Form"

// Creates the user search and results states.
const SearchContext = ()=>{
	// The state of the user's inputs
	// updates when any search parameter is changed
	const [searchState, setSearchState] = useState({
		monster:"",
		hunterRank:"",
		masterRank:"",
	});
	// The state of the search results
	// Updates when submit is pressed
	const [recommendedArmor, setRecommendedArmor] = useState({
		head: {},
		chest: {},
		waist: {},
		gloves: {},
		legs: {}
	})

	// Update the searchState fields.
	// These methods are passed to their respective components
	const updateMonster = (event)=>{
		setSearchState({...searchState, monster: event.target.value})
	};
	const updateHunterRank = (event) => {
		setSearchState({ ...searchState, hunterRank: event.target.value })
	};
	const updateMasterRank = (event) => {
		setSearchState({ ...searchState, masterRank: event.target.value })
	}
	// Updates the recommended Armor
	// Takes in an array of armor objects
	const updateArmor = (armor)=>{
		// These variables are used to store the currently "best" armor in each field.
		let head = {};
		let chest = {};
		let gloves = {};
		let waist = {};
		let legs = {};
		for (let i=0; i < armor.length; i++){
			// Get the type of armor and compare it to the current armor saved in the above variables
			// Set it if there is no option or if the armor is better
			// Currently, the only consideration is highest base defense
			const type = armor[i].type;
			switch(type){
				case "head":
					if (head.defense === undefined || head.defense.base < armor[i].defense.base){
						head = armor[i]
					}
					break;
				case "chest":
					if (chest.defense === undefined || chest.defense.base < armor[i].defense.base) {
						chest = armor[i]
					}
					break;
				case "gloves":
					if (gloves.defense === undefined  || gloves.defense.base < armor[i].defense.base) {
						gloves = armor[i]
					}
					break;
				case "waist":
					if (waist.defense === undefined || waist.defense.base < armor[i].defense.base) {
						waist = armor[i]
					}
					break;
				case "legs":
					if (legs.defense === undefined || legs.defense.base < armor[i].defense.base) {
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
				const res = await Axios.get(`https://mhw-db.com/monsters?q={"name":"`+searchState.monster+`"}`)		
				for(let i=0;i<res.data[0].ailments.length;i++){
					// Get the ailments section
					const ailment=res.data[0].ailments[i]
					try{
					// Get the skills under protection
					const res = await Axios.get(`https://mhw-db.com/armor?q={"skills.skillName":"`+ailment.protection.skills[0].name + `"}`)
						// Add results to the array
						res.data.forEach(armor => {
							armors.push(armor)
						})
					}catch(err){
						console.log(err)
					}
				}
			// Some monsters have an undefined ailments.protection
			}catch(err){
				console.log(err);
			}
			
			updateArmor(armors);

		}
	}
	return(
		<div>
			<Form onSubmit={getResponse}>
				<Form.Group>
					<MonsterSelector updateMonster={updateMonster} />
					<HR updateHunterRank={updateHunterRank} />
					<MR updateMasterRank={updateMasterRank} />
					<button type="submit">Submit</button>
				</Form.Group>
			</Form>
			<ArmorDisplay armor={recommendedArmor}/>
		</div>
	)
}
export default SearchContext;
