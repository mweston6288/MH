import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Head from "./armors/head"
import Chest from "./armors/chest"
import Gloves from "./armors/gloves"
import Waist from "./armors/waist"
import Legs from "./armors/legs"
import Total from "./armors/total"
import Axios from "axios"
import Button from "react-bootstrap/Button";
import { useArmorContext } from "../utils/armorContext";
import { Link } from "react-router-dom";

// Display the selected armor. Currently displays names and stats
// Will update with skills and slots
function BuildDisplay(props) {
	const {build} = props;
	const [head, setHead] = useState();
	const [chest, setChest] = useState();
	const [gloves, setGloves] = useState();
	const [waist, setWaist] = useState();
	const [legs, setLegs] = useState();
	const [armorContext, dispatch] = useArmorContext();
	useEffect(()=>{
		if(build.headID){
			Axios.get(`http://mhw-db.com/armor?q={"id":`+build.headID+`}`)
				.then(response=>{
					setHead(response.data[0])
				})
		}
		if (build.chestID) {
			Axios.get(`http://mhw-db.com/armor?q={"id":` + build.chestID + `}`)
				.then(response => {
					setChest(response.data[0])
				})
		}
		if (build.glovesID) {
			Axios.get(`http://mhw-db.com/armor?q={"id":` + build.glovesID + `}`)
				.then(response => {
					setGloves(response.data[0])
				})
		}
		if (build.waistID) {
			Axios.get(`http://mhw-db.com/armor?q={"id":` + build.waistID + `}`)
				.then(response => {
					setWaist(response.data[0])
				})
		}
		if (build.legsID) {
			Axios.get(`http://mhw-db.com/armor?q={"id":` + build.legsID + `}`)
				.then(response => {
					setLegs(response.data[0])
				})
		}
	}, [build])

	function handleEdit(event){
		event.preventDefault();
		dispatch({type: "edit", head: head, chest:chest, gloves:gloves, waist:waist, legs:legs, name: build.name, _id:build._id})
		console.log(props.history)
		props.history.push("/")
	}

	return (
		<Container>
			<Row>
				<Col className="col-sm-4">
					<Head head={head}/>
				</Col>
				<Col className="col-sm-4">
					<Chest chest={chest} />
				</Col>
				<Col className="col-sm-4">
					<Gloves gloves={gloves} />
				</Col>
			</Row>
			<Row>
				<Col className="col-sm-4">
					<Waist waist={waist} />
				</Col>
				<Col className="col-sm-4">
					<Legs legs={legs} />
				</Col>
				<Col className="col-sm-4">
					<Total build="true" head={head} chest={chest} gloves={gloves} waist={waist} legs={legs}/>
				</Col>
			</Row>
			<Button onClick={handleEdit}>
				Edit Build
			</Button>
		</Container>
	)
}
export default BuildDisplay;