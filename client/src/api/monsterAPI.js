const axios = require("axios");

// Get low rank monsters
export const getLRMonsterList = (HR) => { 
	return axios.get("/api/monsters/LRmonsters/"+HR)
}
// Get high rank monsters
export const getHRMonsterList = (HR) => {
	return axios.get("/api/monsters/HRmonsters/" + HR)
}
// Get master rank monsters
export const getMRMonsterList = (MR) => {
	return axios.get("/api/monsters/MRmonsters/" + MR)
}

// Get a specific monster. Used to get recommended skills
export const getMonster = (name) => {
	return axios.get("/api/monsters/"+name)
}
const apis = {
	getLRMonsterList,
	getHRMonsterList,
	getMRMonsterList,
	getMonster
}
export default apis;