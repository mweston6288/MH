import React from "react";

function SkillDisplay({armor}){
	if (armor){
		return(
			<div>
				{armor.skills.map(skill=>(
					<div>{skill.skillName} {skill.level}</div>
				))}
			</div>
		)
	} else	
	return(
		<div/>
	)
}
export default SkillDisplay;