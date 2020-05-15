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

// Display the selected armor. Currently displays names and stats
// Will update with skills and slots
function BuildDisplay(props) {
	console.log(props);
	const [head, setHead] = useState();
	const [chest, setChest] = useState();
	const [gloves, setGloves] = useState();
	const [waist, setWaist] = useState();
	const [legs, setLegs] = useState();
	useEffect(()=>{
		if(props.headID){
			Axios.get(`http://mhw-db.com/armor?q={"id":`+props.headID+`}`)
				.then(response=>{
					console.log(response);
					setHead(response.data[0]);
				})
		}
		if (props.chestID) {
			Axios.get(`http://mhw-db.com/armor?q={"id":` + props.chestID + `}`)
				.then(response => {
					console.log(response);
					setChest(response.data[0]);

				})
		}
		if (props.glovesID) {
			Axios.get(`http://mhw-db.com/armor?q={"id":` + props.glovesID + `}`)
				.then(response => {
					console.log(response);
					setGloves(response.data[0]);

				})
		}
		if (props.waistID) {
			Axios.get(`http://mhw-db.com/armor?q={"id":` + props.waistID + `}`)
				.then(response => {
					console.log(response);
					setWaist(response.data[0]);

				})
		}
		if (props.legsID) {
			Axios.get(`http://mhw-db.com/armor?q={"id":` + props.legsID + `}`)
				.then(response => {
					console.log(response);
					setLegs(response.data[0]);
				})
		}
	}, [props])
	console.log(head);
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
					<Total />
				</Col>
			</Row>
		</Container>
	)
}
export default BuildDisplay;