
export const totalCalculator = (armor)=>{
	let defense = 0;
	let fireRes = 0;
	let waterRes = 0;
	let thunderRes = 0;
	let iceRes = 0;
	let dragonRes = 0;
	let skills = [];
	// Go through each piece of armor and add up their stats
	for (const armorPiece in armor) {
		// This is here in case one of the armor fields is null
		if (armor[armorPiece]) {
			defense += armor[armorPiece].defense.base
			fireRes += armor[armorPiece].resistances.fire
			waterRes += armor[armorPiece].resistances.water
			thunderRes += armor[armorPiece].resistances.thunder
			iceRes += armor[armorPiece].resistances.ice
			dragonRes += armor[armorPiece].resistances.dragon
			// Map the attached skills to an array of objects
			// The objects will contain the skill name and cumulative level
			armor[armorPiece].skills.forEach(skill => {
				const skillIndex = skills.findIndex(arraySkill => arraySkill.skillName === skill.skillName)
				// Skill not previously found so push it into the array
				if (skillIndex !== -1) {
					skills[skillIndex].level += skill.level
				}
				// update the level
				else {
					skills.push({ skillName: skill.skillName, level: skill.level })
				}
			})
		}
	}
	// Game calculates the bonus from Defense Boost before any elemental
	// bonuses so this needs checking first
	for (let i = 0; i < skills.length; i++) {
		if (skills[i].skillName === "Defense Boost") {
			calculateDefenseBoost(skills[i].level);
		}
	}
	for(let i = 0; i < skills.length; i++){
		if (skills[i].skillName === "Fire Resistance") {calculateFireRes(skills[i].level) }
		else if (skills[i].skillName === "Water Resistance") { calculateWaterRes(skills[i].level)}
		else if (skills[i].skillName === "Ice Resistance") { calculateIceRes(skills[i].level)}
		else if (skills[i].skillName === "Thunder Resistance") { calculateThunderRes(skills[i].level)}
		else if (skills[i].skillName === "Dragon Resistance") { calculateDragonRes(skills[i].level)}
	}
	// in-game process. Multiplicative bonus followed by addition
	// round to nearest whole value
	function calculateDefenseBoost(level){
		switch(level){
			case 1:
				defense += 5;
				break;
			case 2:
				defense += 10;
				break;
			case 3:
				defense = Math.round(defense * 1.05);
				defense += 10;
				break;
			case 4:
				defense = Math.round(defense * 1.05);
				defense += 20;
				fireRes += 3
				waterRes += 3
				thunderRes += 3
				iceRes += 3
				dragonRes += 3
				break;
			case 5:
				defense = Math.round(defense * 1.08);
				defense += 20;
				fireRes += 3
				waterRes += 3
				thunderRes += 3
				iceRes += 3
				dragonRes += 3
				break;
			case 6:
				defense = Math.round(defense * 1.08);
				defense += 35;
				fireRes += 5
				waterRes += 5
				thunderRes += 5
				iceRes += 5
				dragonRes += 5
				break;
			case 7:
			default:
				defense = Math.round(defense * 1.10);
				defense += 35;
				fireRes += 5
				waterRes += 5
				thunderRes += 5
				iceRes += 5
				dragonRes += 5
		}
	}
	function calculateFireRes(level){
		switch(level){
			case 1:
				fireRes += 6;
				break;
			case 2:
				fireRes += 12;
				break;
			case 3:
			default:
				fireRes += 20;
				defense += 10;
		}
	}
	function calculateWaterRes(level) {
		switch (level) {
			case 1:
				waterRes += 6;
				break;
			case 2:
				waterRes += 12;
				break;
			case 3:
			default:
				waterRes += 20;
				defense += 10;
		}
	} function calculateThunderRes(level) {
		switch (level) {
			case 1:
				thunderRes += 6;
				break;
			case 2:
				thunderRes += 12;
				break;
			case 3:
			default:
				thunderRes += 20;
				defense += 10;
		}
	} function calculateIceRes(level) {
		switch (level) {
			case 1:
				iceRes += 6;
				break;
			case 2:
				iceRes += 12;
				break;
			case 3:
			default:
				iceRes += 20;
				defense += 10;
		}
	} function calculateDragonRes(level) {
		switch (level) {
			case 1:
				dragonRes += 6;
				break;
			case 2:
				dragonRes += 12;
				break;
			case 3:
			default:
				dragonRes += 20;
				defense += 10;
		}
	}

	const returnPackage = {};
	returnPackage.defense = defense;
	returnPackage.fireRes = fireRes;
	returnPackage.waterRes = waterRes;
	returnPackage.iceRes = iceRes;
	returnPackage.thunderRes = thunderRes;
	returnPackage.dragonRes = dragonRes;
	returnPackage.skills = skills;
	
	return returnPackage;
}