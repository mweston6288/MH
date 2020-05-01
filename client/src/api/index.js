
const axios = require("axios");

export const getArmor = () => { return axios.get("https://mhw-db.com/armor")};
export const getMonsterList = () => { return axios.get("https://mhw-db.com/monsters")}
const apis = {
    getArmor,
    getMonsterList
}
export default apis;