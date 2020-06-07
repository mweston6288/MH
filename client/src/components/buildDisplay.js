import React, { useEffect, useState } from "react";
import Head from "./armors/head"
import Chest from "./armors/chest"
import Gloves from "./armors/gloves"
import Waist from "./armors/waist"
import Legs from "./armors/legs"
import Total from "./armors/total"
import Axios from "axios"
import Button from "react-bootstrap/Button";
import { useArmorContext } from "../utils/armorContext";
import Table from "react-bootstrap/Table";
import def from "../images/mhw-defense_s.png"
import fire from "../images/mhw-fire-damage_s.png"
import water from "../images/mhw-water-elemental-damage_s.png"
import ice from "../images/mhw-ice-damage_s.png"
import thunder from "../images/mhw-thunder-damage_s.png"
import dragon from "../images/mhw-dragon-damage_s.png"
import { useUserContext } from "../utils/userContext";
import userAPI from "../api/userAPI";
import { useAlertContext } from "../utils/alertContext";

// Display the build armor
function BuildDisplay(props) {
	const {build} = props;
	const {search}=props;
	// Since setState does not play well with multiple asyncronous calls
	// trying to edit the same variable, I've opted to save all armor
	// pieces into their own states
	const [head, setHead] = useState();
	const [chest, setChest] = useState();
	const [gloves, setGloves] = useState();
	const [waist, setWaist] = useState();
	const [legs, setLegs] = useState();
	const [armorContext, dispatch] = useArmorContext();
	const [user, userDispatch] = useUserContext();
	const [alert, alertDispatch] = useAlertContext();
	// Checks if any particular armor pieces are in the build
	// and then calls mhw-db to get the armor associated with the id
	// Then it saves the result to the appropriate state above
	useEffect(()=>{
		// This will only trigger once search is true
		// Search becomes true when the user first opens the
		// accordion. This is in place because otherwise all builds would
		// make API calls at once. With this, calls only get made as you
		// check builds
		if (search){
			if(build.headID){
				Axios.get(`https://mhw-db.com/armor?q={"id":`+build.headID+`}`)
					.then(response=>{
						setHead(response.data[0])
					})
			}
			if (build.chestID) {
				Axios.get(`https://mhw-db.com/armor?q={"id":` + build.chestID + `}`)
					.then(response => {
						setChest(response.data[0])
					})
			}
			if (build.glovesID) {
				Axios.get(`https://mhw-db.com/armor?q={"id":` + build.glovesID + `}`)
					.then(response => {
						setGloves(response.data[0])
					})
			}
			if (build.waistID) {
				Axios.get(`https://mhw-db.com/armor?q={"id":` + build.waistID + `}`)
					.then(response => {
						setWaist(response.data[0])
					})
			}
			if (build.legsID) {
				Axios.get(`https://mhw-db.com/armor?q={"id":` + build.legsID + `}`)
					.then(response => {
						setLegs(response.data[0])
					})
			}
		}
	}, [build, search])
	// If you click edit build, the saved build overwrites whatever is in the
	// current armor context, then it redirects to the home page
	function handleEdit(event){
		event.preventDefault();
		dispatch({type: "edit", head: head, chest:chest, gloves:gloves, waist:waist, legs:legs, name: build.name, _id:build._id})
		props.history.push("/")
	}
	// Delete a build, remove it from the userDB, update the userContext details
	function handleDelete(event){
		event.preventDefault();
		userAPI.deleteBuild(user._id, build._id)
		userDispatch({type: "delete", _id: build._id})
		dispatch({type:"reset"});
		alertDispatch({show: true, variant: "success", message: build.name + " deleted"})
	}
	return (
		<div>
		<Table>
			<thead>
				<tr>
					<th>Type</th>
					<th>Name</th>
					<th><img src={def} title="defense" alt="defense" />
					</th>
					<th><img src={fire} title="fire resistance" alt="fire" /></th>
					<th><img src={water} title="water resistance" alt="water" /></th>
					<th><img src={thunder} title="thunder resistance" alt="thunder" /></th>
					<th><img src={ice} title="ice resistance" alt="ice" /></th>
					<th><img src={dragon} title="dragon resistance" alt="dragon" /></th>
					<th>Skills</th>
				</tr>
			</thead>
			<Head head={head} />
			<Chest chest={chest} />
			<Gloves gloves={gloves} />
			<Waist waist={waist} />
			<Legs legs={legs} />
		</Table>
		<Total build={true} head={head} chest={chest} waist={waist} gloves={gloves}legs={legs}/>
			<Button onClick={handleEdit}>
				Edit Build
			</Button>
			<Button onClick={handleDelete}>
				Delete Build
			</Button>
		</div>)
}
export default BuildDisplay;