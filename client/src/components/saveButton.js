import React from "react";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../utils/userContext";
import { useArmorContext } from "../utils/armorContext";
import API from "../api/userAPI.js"

// Creates a button that saves user created builds
function SaveButton({defaultName}) {
	const [armorState, armorDispatch] = useArmorContext();
	const [userState] = useUserContext();

	const saveBuild = (event)=>{
		event.preventDefault();
		const armor = armorState;
		if (armor.name === ""){
			console.log(armor);
			armor.name = defaultName;
		}
		// If there is no _id in armorState, this is a new build to make
		if (!armorState._id){
			API.saveBuild(userState._id, armor)
				.then(response => {
					// update armor context so it has the new build's _id
					// user will need to reset the armor context to make a new build
					armorDispatch({ type: "save", _id: response.data })
				})
		// If there is an _id, then this is a buld to update
		}else{
			API.updateBuild(armorState)
		}
	}
	return (
		<Button onClick={saveBuild}>
			Save
		</Button>
	)
}
export default SaveButton;