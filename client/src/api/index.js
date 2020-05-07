const axios = require("axios");

// Get all armors. Currently unused.
export const getArmor = () => { 
    return axios.get("https://mhw-db.com/armor")
};
// Get all monsters. Used by the monster selector component
export const getMonsterList = (HR, MR) => { 
    return axios.get("./api/monsters/"+HR+"/"+MR)
}
// Get a specific monster. Used to get recommended skills
export const getMonster = (name) => {
    return axios.get("./api/monsters/"+name)
}
const apis = {
    getArmor,
    getMonsterList,
    getMonster
}
export default apis;