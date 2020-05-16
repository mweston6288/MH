import React from "react";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../utils/userContext";
import { useArmorContext } from "../utils/armorContext";
import API from "../api/userAPI.js"

// Creates a button that saves user created builds
function SaveButton() {
	const [armorState, armorDispatch] = useArmorContext();
	const [userState] = useUserContext();
	console.log(armorState)
	const saveBuild = (event)=>{
		event.preventDefault();
		if (!armorState._id){
			API.saveBuild(userState.userName, armorState)
				.then(response => {
					armorDispatch({ type: "save", _id: response.data })
				})
		}else{
			console.log("Here");
			API.updateBuild(armorState)
			.then(response=>{
				console.log(response);
			})
		}
	}
	return (
		<Button onClick={saveBuild}>
			Save
		</Button>
	)
}
export default SaveButton;