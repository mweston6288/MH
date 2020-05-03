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
		console.log(recommendedArmor)
		console.log(armor)
		for (let i=0; i < armor.length; i++){
			const type = armor[i].type;
			switch(type){
				case "head":
					if (recommendedArmor.head.defense === undefined || recommendedArmor.head.defense.base < armor[i].defense.base){
						recommendedArmor.head = armor[i]
						console.log(recommendedArmor)

					}
					break;
				case "chest":
					if (recommendedArmor.chest.defense === undefined || recommendedArmor.chest.defense.base < armor[i].defense.base) {
						setRecommendedArmor({ ...recommendedArmor, chest: armor[i] })
					}
					break;
				case "gloves":
					if (recommendedArmor.gloves.defense === undefined  || recommendedArmor.gloves.defense.base < armor[i].defense.base) {
						setRecommendedArmor({ ...recommendedArmor, gloves: armor[i] })
					}
					break;
				case "waist":
					if (recommendedArmor.waist.defense === undefined || recommendedArmor.waist.defense.base < armor[i].defense.base) {
						recommendedArmor.waist = armor[i]

					}
					break;
				case "legs":
					if (recommendedArmor.legs.defense === undefined || recommendedArmor.legs.defense.base < armor[i].defense.base) {
						setRecommendedArmor({ ...recommendedArmor, legs: armor[i] })
					}
					break;
			}
		}
	}
	const getResponse = (event)=>{
		if(searchState.monster){
		event.preventDefault();
		Axios.get(`https://mhw-db.com/monsters?q={"name":"`+searchState.monster+`"}`).then(res=>{
			res.data[0].ailments.forEach(async ailment =>{
				await Axios.get(`https://mhw-db.com/armor?q={"skills.skillName":"`+ailment.protection.skills[0].name + `"}`).then(async res=>{
				await setArmor(res.data);
				}).catch(err=>{
					console.log(err)
				})				
			})		
		}).catch(err => {
			console.log(err);
		})
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
