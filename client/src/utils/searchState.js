import React from "react";
import MonsterSelector from "../components/MonsterSelector"
import HR from "../components/HR"
import MR from "../components/MR"
import Form from "react-bootstrap/Form"
import * as apis from "../api/monsterAPI.js"
import { useSearchContext } from "./searchContext";

// Creates the user search and results states.
const SearchContext = ()=>{
	// The state of the user's inputs
	// updates when any search parameter is changed
	const [{rank, monster, masterRank, hunterRank, skills}, dispatch] = useSearchContext();

	// Take the search state and use it to find all armors that fit
	// the requirements. Currently filters armor by skills in the monster's "ailments.protection"
	// field.
	const getResponse = async (event)=>{
		event.preventDefault();
		if(monster){
			try {
				// Get the full details on the monster I'm looking for
				// and set skills to the recommended skills
				const res = await apis.getMonster(monster);
				dispatch({type:"updateSkills", skills:res.data[0].skills})
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
						<MR/>
						:
						<HR/>
					}
					<MonsterSelector/>
					<button type="submit">Submit</button>
				</Form.Group>
			</Form>
		</div>
	)
}
export default SearchContext;
