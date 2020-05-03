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
		ailments:[],
		armor:[]
	})

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
	const getResponse = (event)=>{
		if(searchState.monster){
		console.log(event)
		event.preventDefault();
		Axios.get(`https://mhw-db.com/monsters?q={"name":"`+searchState.monster+`"}`).then(res=>{
			res.data[0].ailments.forEach(ailment=>{
				Axios.get(`https://mhw-db.com/armor?q={"skills.skillName":"`+ailment.protection.skills[0].name + `"}`).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})				
			})		
		})}
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
