import React, {useState, useEffect, useContext} from "react"
import {getArmor} from "../api/index.js"
import Button from "react-bootstrap/Button"
import {useArmorContext} from "./armorContext"
const SelectArmor = ({HR, MR, skill})=>{
	const [state, dispatch] = useArmorContext();
	const [armors, setArmors] = useState([]);

	// Get the list of armors that fit the given restrictions and add them into the armor state
	useEffect(()=>{ // useEffect is being used because otherwise, this will run infinitely
		getArmor(HR, MR, skill)
			.then(res => {
				const armorList=[];
				res.data.forEach(armor => {
					armorList.push(armor);
				})
				setArmors(armorList);
			});        
	}, [skill])
	// Use the armor type to determine which element in the context to
	const addArmor=(event)=>{
		const index = event.target.id;
		const armorType = armors[index].type;
		switch(armorType){
			case "head":
				dispatch({type: "head", armor: armors[index]})
				break;
			case "chest":
				dispatch({ type: "chest", armor: armors[index] })
				break;				
			case "gloves":
				dispatch({ type: "gloves", armor: armors[index] })
				break;
			case "waist":
				dispatch({ type: "waist", armor: armors[index] })
				break;
			case "legs":
				dispatch({ type: "legs", armor: armors[index] })
				break;
			default:
		}
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

export default SelectArmor;