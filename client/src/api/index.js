const axios = require("axios");

// Get all armors. Currently unused.
export const getArmor = () => { 
    return axios.get("https://mhw-db.com/armor")
};
// Get all monsters. Used by the monster selector component
export const getMonsterList = () => { 
    return axios.get("./api/monsters")
}
const apis = {
    getArmor,
    getMonsterList
}
export default apis;