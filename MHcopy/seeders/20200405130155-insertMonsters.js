// Command to seed:
// sequelize-cli db:seed:all

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const monsterData = "./monsterData.json"
    return queryInterface.bulkInsert('Monsters', [
      {
        "monsterID": 1,
        "name": "Aptonoth",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 2,
        "name": "Jagras",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 3,
        "name": "Mernos",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 4,
        "name": "Vespoid",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 5,
        "name": "Mosswine",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 6,
        "name": "Apceros",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 7,
        "name": "Kestodon",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 8,
        "name": "Noios",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 9,
        "name": "Gajau",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 10,
        "name": "Kelbi",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 11,
        "name": "Raphinos",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 12,
        "name": "Shamos",
        "lowRank": 6,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 13,
        "name": "Girros",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 14,
        "name": "Hornetaur",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 15,
        "name": "Gastodon",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "monsterID": 16,
        "name": "Barnos",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "monsterID": 17,
        "name": "Great Jagras",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 18,
        "name": "Kulu-Ya-Ku",
        "lowRank": 2,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 19,
        "name": "Pukei-Pukei",
        "lowRank": 2,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 20,
        "name": "Barroth",
        "masterRank": 7
      },
      {
        "monsterID": 21,
        "name": "Jyuratodus",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 22,
        "name": "Tobi-Kadachi",
        "lowRank": 4,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 23,
        "name": "Anjanath",
        "lowRank": 4,
        "highRank": 11,
        "masterRank": 4
      },
      {
        "monsterID": 43,
        "name": "Rathian",
        "lowRank": 5,
        "highRank": 11,
        "masterRank": 4
      },
      {
        "monsterID": 48,
        "name": "Tzitzi-Ya-Ku",
        "lowRank": 6,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 40,
        "name": "Paolumu",
        "lowRank": 6,
        "highRank": 11,
        "masterRank": 4
      },
      {
        "monsterID": 31,
        "name": "Great Girros",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "monsterID": 41,
        "name": "Radobaan",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 4
      },
      {
        "monsterID": 36,
        "name": "Legiana",
        "lowRank": 8,
        "highRank": 13,
        "masterRank": 7
      },
      {
        "monsterID": 39,
        "name": "Odogaron",
        "lowRank": 8,
        "highRank": 13,
        "masterRank": 7
      },
      {
        "monsterID": 42,
        "name": "Rathalos",
        "lowRank": 8,
        "highRank": 13,
        "masterRank": 1
      },
      {
        "monsterID": 28,
        "name": "Diablos",
        "lowRank": 8,
        "highRank": 13,
        "masterRank": 7
      },
      {
        "monsterID": 32,
        "name": "Kirin",
        "lowRank": 8,
        "highRank": 14,
        "masterRank": 19
      },
      {
        "monsterID": 52,
        "name": "Zorah Magdaros",
        "highRank": 11
      },
      {
        "monsterID": 30,
        "name": "Dodogama",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "monsterID": 44,
        "name": "Pink Rathian",
        "highRank": 12,
        "masterRank": 6
      },
      {
        "monsterID": 25,
        "name": "Bazelgeuse",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "monsterID": 27,
        "name": "Deviljho",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "monsterID": 35,
        "name": "Lavasioth",
        "highRank": 13,
        "masterRank": 7
      },
      {
        "monsterID": 49,
        "name": "Uragaan",
        "highRank": 13,
        "masterRank": 7
      },
      {
        "monsterID": 24,
        "name": "Azure Rathalos",
        "highRank": 13,
        "masterRank": 13
      },
      {
        "monsterID": 29,
        "name": "Black Diablos",
        "highRank": 13,
        "masterRank": 13
      },
      {
        "monsterID": 38,
        "name": "Nergigante",
        "highRank": 13
      },
      {
        "monsterID": 45,
        "name": "Teostra",
        "highRank": 14,
        "masterRank": 19
      },
      {
        "monsterID": 37,
        "name": "Lunastra",
        "highRank": 16,
        "masterRank": 1
      },
      {
        "monsterID": 34,
        "name": "Kushala Daora",
        "highRank": 14,
        "masterRank": 19
      },
      {
        "monsterID": 50,
        "name": "Vaal Hazak",
        "highRank": 14,
      },
      {
        "monsterID": 33,
        "name": "Kulve Taroth",
        "highRank": 16
      },
      {
        "monsterID": 51,
        "name": "Xeno'jiiva",
        "highRank": 16
      },
      {
        "monsterID": 58,
        "name": "Viper Tobi-Kadachi",
        "masterRank": 3
      },
      {
        "monsterID": 59,
        "name": "Namielle",
        "masterRank": 20
      },
      {
        "monsterID": 60,
        "name": "Zinogre",
        "masterRank": 24
      },
      {
        "monsterID": 57,
        "name": "Rajang",
        "masterRank": 24
      },
      {
        "monsterID": 56,
        "name": "Stygian Zinogre",
        "masterRank": 24
      },
      {
        "monsterID": 26,
        "name": "Behemoth",
        "highRank": 16,
      },
      {
        "monsterID": 53,
        "name": "Leshen",
        "highRank": 16
      },
      {
        "monsterID": 54,
        "name": "Ancient Leshen",
        "highRank": 50
      },
      {
        "monsterID": 55,
        "name": "Safi'jiiva",
        "masterRank": 24
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
