'use strict';
module.exports = (sequelize, DataTypes) => {
  const Monsters = sequelize.define('Monsters', {
      monsterID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      lowRank: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      highRank: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    masterRank: {
      type: DataTypes.INTEGER,
        allowNull: true
    }
  }, {
      timestamps: false
  });
  Monsters.associate = function(models) {
    // associations can be defined here
  };
  Monsters.getMonsters = function(cb){
    Monsters.findAll()
      .then((res) => {
        const data = [];
        res.forEach((element) => {
          data.push({ id: element.monsterID, name: element.name });
        });
    return cb(null, data);
  })
}
 
  return Monsters;
};