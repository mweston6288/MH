const axios = require("axios");

// Determine a possible rarity of gear to search by based on hunter/master rank
// If I can make a more accurate search form, this will be discarded
function determineRarity(HR, MR){
    // Check if we should search by hunter or master rank
    if(HR >= 16 && MR >= 1){
        if(MR<=4){
            return 9;
        }
        if(MR<=9){
            return 10;
        }
        if(MR<=18){
            return 11;
        }
        return 12;
    }
    else{
        if (HR <=2){
            return 1;
        }
        if(HR<=4){
            return 2;
        }
        if(HR<=7){
            return 3;
        }
        if(HR<=10){
            return 4;
        }
        if(HR<=12){
            return 5;
        }
        if(HR<=13){
            return 7;
        }
        return 8;
    }
}

// Get armors that have certain skills and are a certain max rarity
export const getArmor = (HR, MR, skill) => {
    console.log(skill)
    const rarity = determineRarity(HR,MR);
    return axios.get(`https://mhw-db.com/armor?q={"skills.skillName":"`+skill.name+`","rarity":{"$lte":`+rarity+`}}`)
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