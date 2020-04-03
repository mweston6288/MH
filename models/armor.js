const axios = require("axios");
module.exports = function (sequelize, DataTypes) {
    const Armor = sequelize.define("Armor", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: false,
            primaryKey: true
        },
        rarity: {
            type: DataTypes.INTEGER,
            allowNull: false 
        }
    }, {
        timestamps: false
    });

    return Armor;
};
axios.get("https://mhw-db.com/armor").then((res) => {
    for (let i = 0; i < res.length; i++) {
        Armor.create({
            id: res[i].id,
            rarity: res[i].rarity
        })
    }
})