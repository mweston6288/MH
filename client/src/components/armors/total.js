import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import {useArmorContext} from "../../utils/armorContext"
import {totalCalculator} from "../../utils/totalCalculator";
function Total(props) {
	let armor;
	const [armorContext] = useArmorContext();
	// Total is used in armorDisplay to calculate the value of the build being
	// created and in buildDisplay to calculate the value of a saved build
	// In buildDisplay, a boolean called build is passed along with the build's gear.
	// if props.build is true, Total will use the passed in armor,
	// Otherwise it will use the native armorContext
	if (props.build) {
		armor = {
			head: props.head,
			chest: props.chest,
			gloves: props.gloves,
			waist: props.waist,
			legs: props.legs
		};
	}else{
		armor = armorContext.armor;
	}

	const {defense, fireRes, waterRes, iceRes, thunderRes, dragonRes, skills} = totalCalculator(armor);
	

	return (
		<Card>
			<Card.Body>
				<Card.Title>Total
				</Card.Title>
				<ListGroup>
					<ListGroup.Item>Defense:{defense}</ListGroup.Item>
					<ListGroup.Item>Fire Resistance:{fireRes}</ListGroup.Item>
					<ListGroup.Item>Water Resistance: {waterRes}</ListGroup.Item>
					<ListGroup.Item>Ice Resistance: {iceRes}</ListGroup.Item>
					<ListGroup.Item>Thunder Resistance:{thunderRes}</ListGroup.Item>
					<ListGroup.Item>Dragon Resistance: {dragonRes}</ListGroup.Item>
				</ListGroup>
				<ListGroup>
					{skills.map(skill=>(
						<ListGroup.Item>{skill.skillName} {skill.level}</ListGroup.Item>
					))}
				</ListGroup>
			</Card.Body>
		</Card>
	)
}
export default Total;