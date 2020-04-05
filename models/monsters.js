'use strict';
module.exports = (sequelize, DataTypes) => {
  const Monsters = sequelize.define('Monsters', {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: false,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      }
  }, {
      timestamps: false
  });
  Monsters.associate = function(models) {
    // associations can be defined here
  };
  Monsters.add = function(data){
    Monsters.create({
        id: data.body.id,
        name: data.body.name
    })
  }
  return Monsters;
};