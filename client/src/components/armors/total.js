import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import {useArmorContext} from "../../utils/armorContext"
import {totalCalculator} from "../../utils/totalCalculator";
function Total(props) {
	const {build, head, chest, gloves, waist, legs} = props;
	let armor;
	const [armorContext] = useArmorContext();
	// Total is used in armorDisplay to calculate the value of the build being
	// created and in buildDisplay to calculate the value of a saved build
	// In buildDisplay, a boolean called build is passed along with the build's gear.
	// if props.build is true, Total will use the passed in armor,
	// Otherwise it will use the native armorContext
	if (build) {
		armor = {
			head: head,
			chest: chest,
			gloves: gloves,
			waist: waist,
			legs: legs
		};
	}else{
		armor = armorContext.armor;
	}
	// Gets the stat values of the equipment
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
					<ListGroup.Item>Thunder Resistance:{thunderRes}</ListGroup.Item>
					<ListGroup.Item>Ice Resistance: {iceRes}</ListGroup.Item>
					<ListGroup.Item>Dragon Resistance: {dragonRes}</ListGroup.Item>
				</ListGroup>
				<ListGroup>
					{skills.map(skill=>(
						<ListGroup.Item>{skill.skillName} {skill.level}</ListGroup.Item>
					))}
				</ListGroup>
				<ListGroup>
					{/*Notify user if they are immune to certain elemental blights*/}
					{fireRes >= 20 &&
					<ListGroup.Item>This build is immune to fireblight</ListGroup.Item>
					}
					{waterRes >= 20 &&
						<ListGroup.Item>This build is immune to waterblight</ListGroup.Item>
					}
					{thunderRes >= 20 &&
						<ListGroup.Item>This build is immune to thunderblight</ListGroup.Item>
					}
					{iceRes >= 20 &&
						<ListGroup.Item>This build is immune to iceblight</ListGroup.Item>
					}
					{dragonRes >= 20 &&
						<ListGroup.Item>This build is immune to dragonblight</ListGroup.Item>
					}
				</ListGroup>
			</Card.Body>
		</Card>
	)
}
export default Total;