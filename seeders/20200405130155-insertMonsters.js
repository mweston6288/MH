'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const monsterData = "./monsterData.json"
    return queryInterface.bulkInsert('Monsters', [
      {
        "id": 1,
        "name": "Aptonoth",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 2,
        "name": "Jagras",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 3,
        "name": "Mernos",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 4,
        "name": "Vespoid",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 5,
        "name": "Mosswine",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 6,
        "name": "Apceros",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 7,
        "name": "Kestodon",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 8,
        "name": "Noios",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 9,
        "name": "Gajau",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 10,
        "name": "Kelbi",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 11,
        "name": "Raphinos",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 12,
        "name": "Shamos",
        "lowRank": 6,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 13,
        "name": "Girros",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 14,
        "name": "Hornetaur",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 15,
        "name": "Gastodon",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "id": 16,
        "name": "Barnos",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "id": 17,
        "name": "Great Jagras",
        "lowRank": 1,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 18,
        "name": "Kulu-Ya-Ku",
        "lowRank": 2,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 19,
        "name": "Pukei-Pukei",
        "lowRank": 2,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 20,
        "name": "Barroth",
        "masterRank": 7
      },
      {
        "id": 21,
        "name": "Jyuratodus",
        "lowRank": 3,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 22,
        "name": "Tobi-Kadachi",
        "lowRank": 4,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 23,
        "name": "Anjanath",
        "lowRank": 4,
        "highRank": 11,
        "masterRank": 4
      },
      {
        "id": 24,
        "name": "Azure Rathalos",
        "highRank": 13,
        "masterRank": 13
      },
      {
        "id": 25,
        "name": "Bazelgeuse",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "id": 26,
        "name": "Behemoth",
        "highRank": 16,
      },
      {
        "id": 27,
        "name": "Deviljho",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "id": 28,
        "name": "Diablos",
        "lowRank": 8,
        "highRank": 13,
        "masterRank": 7
      },
      {
        "id": 29,
        "name": "Black Diablos",
        "highRank": 13,
        "masterRank": 13
      },
      {
        "id": 30,
        "name": "Dodogama",
        "highRank": 13,
        "masterRank": 1
      },
      {
        "id": 31,
        "name": "Great Girros",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 32,
        "name": "Kirin",
        "lowRank": 8,
        "highRank": 14,
        "masterRank": 19
      },
      {
        "id": 33,
        "name": "Kulve Taroth",
        "highRank": 16
      },
      {
        "id": 34,
        "name": "Kushala Daora",
        "highRank": 14,
        "masterRank": 19
      },
      {
        "id": 35,
        "name": "Lavasioth",
        "highRank": 13,
        "masterRank": 7
      },
      {
        "id": 36,
        "name": "Legiana",
        "lowRank": 8,
        "highRank": 13,
        "masterRank": 7
      },
      {
        "id": 37,
        "name": "Lunastra",
        "highRank": 16,
        "masterRank": 1
      },
      {
        "id": 38,
        "name": "Nergigante",
        "highRank": 13
      },
      {
        "id": 39,
        "name": "Odogaron",
        "lowRank": 8,
        "highRank": 13,
        "masterRank": 7
      },
      {
        "id": 40,
        "name": "Paolumu",
        "lowRank": 6,
        "highRank": 11,
        "masterRank": 4
      },
      {
        "id": 41,
        "name": "Radobaan",
        "lowRank": 8,
        "highRank": 11,
        "masterRank": 4
      },
      {
        "id": 42,
        "name": "Rathalos",
        "lowRank": 8,
        "highRank": 13,
        "masterRank": 1
      },
      {
        "id": 43,
        "name": "Rathian",
        "lowRank": 5,
        "highRank": 11,
        "masterRank": 4
      },
      {
        "id": 44,
        "name": "Pink Rathian",
        "highRank": 12,
        "masterRank": 6
      },
      {
        "id": 45,
        "name": "Teostra",
        "highRank": 14,
        "masterRank": 19
      },
      {
        "id": 48,
        "name": "Tzitzi-Ya-Ku",
        "lowRank": 6,
        "highRank": 11,
        "masterRank": 1
      },
      {
        "id": 49,
        "name": "Uragaan",
        "highRank": 13,
        "masterRank": 7
      },
      {
        "id": 50,
        "name": "Vaal Hazak",
        "highRank": 14,
      },
      {
        "id": 51,
        "name": "Xeno'jiiva",
        "highRank": 16
      },
      {
        "id": 52,
        "name": "Zorah Magdaros",
        "highRank": 11
      },
      {
        "id": 53,
        "name": "Leshen",
        "highRank": 16
      },
      {
        "id": 54,
        "name": "Ancient Leshen",
        "highRank": 50
      },
      {
        "id": 55,
        "name": "Safi'jiiva",
        "masterRank": 24
      },
      {
        "id": 56,
        "name": "Stygian Zinogre",
        "masterRank": 24
      },
      {
        "id": 57,
        "name": "Rajang",
        "masterRank": 24
      },
      {
        "id": 58,
        "name": "Viper Tobi-Kadachi",
        "masterRank": 3
      },
      {
        "id": 59,
        "name": "Namielle",
        "masterRank": 20
      },
      {
        "id": 60,
        "name": "Zinogre",
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
