import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import {useArmorContext} from "../../utils/armorContext"
function Total() {
	const armor = useArmorContext();
	let defense = 0;
	let fireRes =0;
	let waterRes=0;
	let thunderRes=0;
	let iceRes=0;
	let dragonRes=0;
	let skills = [];
	// Go through each piece of armor and add up their stats
	for (const armorPiece in armor[0]) {
		// This is here in case one of the armor fields is null
		if (armor[armorPiece]){
			defense += armor[armorPiece].defense.base
			fireRes += armor[armorPiece].resistances.fire
			waterRes += armor[armorPiece].resistances.water
			thunderRes += armor[armorPiece].resistances.thunder
			iceRes += armor[armorPiece].resistances.ice
			dragonRes += armor[armorPiece].resistances.dragon
			// Map the attached skills to an array of objects
			// The objects will contain the skill name and cumulative level
			armor[armorPiece].skills.forEach(skill=>{
				const skillIndex = skills.findIndex(arraySkill => arraySkill.skillName === skill.skillName)
				// Skill not previously found so push it into the array
				if (skillIndex !== -1){
					skills[skillIndex].level += skill.level
				}
				// update the level
				else{
					skills.push({ skillName: skill.skillName, level: skill.level })
				}
			})
		}
	}
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