import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../utils/userContext";
import { useArmorContext } from "../utils/armorContext";
import API from "../api/userAPI.js"
import { useAlertContext } from "../utils/alertContext";

// Creates a button that saves user created builds
function SaveButton({defaultName, setErr}) {
	const [armorState, armorDispatch] = useArmorContext();
	const [userState, userDispatch] = useUserContext();
	const [alert, alertDispatch] = useAlertContext();

	const saveBuild = (event)=>{
		event.preventDefault();
		const armor = armorState;
		if (armor.name === ""){
			armor.name = defaultName;
		}
		armor.buildNo = userState.buildCount + 1;
		// If there is no _id in armorState, this is a new build to make
		if (!armorState._id){
			API.saveBuild(userState._id, armor)
				.then(response => {
					// update armor context so it has the new build's _id
					// user will need to reset the armor context to make a new build
					armorDispatch({ type: "save", _id: response.data._id, buildNo: userState.buildCount })
					userDispatch({type:"addBuild", build:response.data})
					alertDispatch({ show: true, variant: "success", message: "Build saved" })
				}).catch(()=>{
					alertDispatch({ show: true, variant: "danger", message: "Something went wrong" })
				})
		// If there is an _id, then this is a build to update
		}else{
			API.updateBuild(armorState)
			.then(()=>{
				userDispatch({ type: "updateBuild", _id: armorState._id })
				setErr({ success: true, error: false });
			}).catch(()=>{
				setErr({ success: false, error: true });
			})
		}
	}
	return (
		<Button onClick={saveBuild}>
			{armorState._id === "" ?
				"Save"
				:
				"Update"}
		</Button>	
	)
}
export default SaveButton;