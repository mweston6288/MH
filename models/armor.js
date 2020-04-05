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
