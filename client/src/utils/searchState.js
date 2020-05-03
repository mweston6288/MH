import React, { useState } from "react";
import MonsterSelector from "../components/MonsterSelector"
import HR from "../components/HR"
import MR from "../components/MR"
import Axios from "axios"
import Form from "react-bootstrap/Form"

const SearchContext = ()=>{
	const [searchState, setSearchState] = useState({
		monster:"",
		hunterRank:"",
		masterRank:"",
	});
	const [recommendedArmor, setRecommendedArmor] = useState({
		head: {},
		chest: {},
		waist: {},
		gloves: {},
		legs: {}
	})

	const updateMonster = (event)=>{
		setSearchState({...searchState, monster: event.target.value})
	};
	const updateHunterRank = (event) => {
		setSearchState({ ...searchState, hunterRank: event.target.value })
	};
	const updateMasterRank = (event) => {
		setSearchState({ ...searchState, masterRank: event.target.value })
	}
	const setArmor = (armor)=>{
		let head = {};
		let chest = {};
		let gloves = {};
		let waist = {};
		let legs = {};
		for (let i=0; i < armor.length; i++){
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
		setRecommendedArmor({...recommendedArmor, head: head, gloves: gloves, waist: waist, legs: legs, chest: chest})
	}
	const getResponse = async (event)=>{
		let armors=[];
		if(searchState.monster){
			event.preventDefault();
			try {
				const res = await Axios.get(`https://mhw-db.com/monsters?q={"name":"`+searchState.monster+`"}`)		
				for(let i=0;i<res.data[0].ailments.length;i++){
					
					const ailment=res.data[0].ailments[i]
					try{
					const res = await Axios.get(`https://mhw-db.com/armor?q={"skills.skillName":"`+ailment.protection.skills[0].name + `"}`)
						
						res.data.forEach(armor => {
							armors.push(armor)
						})
					}catch(err){
						console.log(err)
					}
				}
			}catch(err){
				console.log(err);
			}
			
			setArmor(armors);

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
		</div>
	)
}
export default SearchContext;
