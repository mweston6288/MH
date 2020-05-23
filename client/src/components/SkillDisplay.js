import React from "react";

function SkillDisplay({armor}){
	if (armor){
		return(
			<div>

				{armor.skills.map(skill=>(
					<tbody>
						<td colspan="6">
							<div>{skill.skillName} {skill.level}</div>

						</td>
					</tbody>
				))}
			</div>
		)
	} else	
	return(
		<div/>
	)
}
export default SkillDisplay;