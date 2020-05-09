import React, {useState, useEffect, useContext} from "react"
import {getArmor} from "../api/index.js"
import Button from "react-bootstrap/Button"
import RecommendedArmor from "./armorContext"
const SelectArmor = ({HR, MR, skill})=>{
	console.log(skill)
	const [armors, setArmors] = useState([]);
	const recommendedArmor = useContext(RecommendedArmor);
	console.log(recommendedArmor)
	// Get the list of armors that fit the given restrictions and add them into the armor state
	useEffect(()=>{ // useEffect is being used because otherwise, this will run infinitely
		getArmor(HR, MR, skill)
			.then(res => {
				const armorList = []
				console.log(res);
				res.data.forEach(armor => {
					armorList.push(armor);
				})
				setArmors(armorList);
				console.log(armors)
			});        
	}, [skill])
	// Use the armor type to determine which element in the context to
	const addArmor=(event)=>{
		const index = event.target.id;
		const armorType = armors[index].type;
		switch(armorType){
			case "head":
				recommendedArmor.head = armors[index];
				break;
			case "chest":
				recommendedArmor.chest = armors[index];
				break;				
			case "gloves":
				recommendedArmor.gloves = armors[index];
				break;
			case "waist":
				recommendedArmor.waist = armors[index];
				break;
			case "legs":
				recommendedArmor.legs = armors[index];
				break;
			default:
		}
		console.log(recommendedArmor)
	}
	return (
		<div>
			{armors.map((armor, index)=>(
				<div>
					<div>{armor.name}</div>
					<Button id={index} onClick={addArmor}>Select</Button>
				</div>
			))}
		</div>
	)
}

export default SelectArmor