'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("Monsters", [
      {
        "id": 1,
        "name": "Aptonoth"
      },
      {
        "id": 2,
        "name": "Jagras"
      },
      {
        "id": 3,
        "name": "Mernos"
      },
      {
        "id": 4,
        "name": "Vespoid"
      },
      {
        "id": 5,
        "name": "Mosswine"
      },
      {
        "id": 6,
        "name": "Apceros"
      },
      {
        "id": 7,
        "name": "Kestodon"
      },
      {
        "id": 8,
        "name": "Noios"
      },
      {
        "id": 9,
        "name": "Gajau"
      },
      {
        "id": 10,
        "name": "Kelbi"
      },
      {
        "id": 11,
        "name": "Raphinos"
      },
      {
        "id": 12,
        "name": "Shamos"
      },
      {
        "id": 13,
        "name": "Girros"
      },
      {
        "id": 14,
        "name": "Hornetaur"
      },
      {
        "id": 15,
        "name": "Gastodon"
      },
      {
        "id": 16,
        "name": "Barnos"
      },
      {
        "id": 17,
        "name": "Great Jagras"
      },
      {
        "id": 18,
        "name": "Kulu-Ya-Ku"
      },
      {
        "id": 19,
        "name": "Pukei-Pukei"
      },
      {
        "id": 20,
        "name": "Barroth"
      },
      {
        "id": 21,
        "name": "Jyuratodus"
      },
      {
        "id": 22,
        "name": "Tobi-Kadachi"
      },
      {
        "id": 23,
        "name": "Anjanath"
      },
      {
        "id": 24,
        "name": "Azure Rathalos"
      },
      {
        "id": 25,
        "name": "Bazelgeuse"
      },
      {
        "id": 26,
        "name": "Behemoth"
      },
      {
        "id": 27,
        "name": "Deviljho"
      },
      {
        "id": 28,
        "name": "Diablos"
      },
      {
        "id": 29,
        "name": "Black Diablos"
      },
      {
        "id": 30,
        "name": "Dodogama"
      },
      {
        "id": 31,
        "name": "Great Girros"
      },
      {
        "id": 32,
        "name": "Kirin"
      },
      {
        "id": 33,
        "name": "Kulve Taroth"
      },
      {
        "id": 34,
        "name": "Kushala Daora"
      },
      {
        "id": 35,
        "name": "Lavasioth"
      },
      {
        "id": 36,
        "name": "Legiana"
      },
      {
        "id": 37,
        "name": "Lunastra"
      },
      {
        "id": 38,
        "name": "Nergigante"
      },
      {
        "id": 39,
        "name": "Odogaron"
      },
      {
        "id": 40,
        "name": "Paolumu"
      },
      {
        "id": 41,
        "name": "Radobaan"
      },
      {
        "id": 42,
        "name": "Rathalos"
      },
      {
        "id": 43,
        "name": "Rathian"
      },
      {
        "id": 44,
        "name": "Pink Rathian"
      },
      {
        "id": 45,
        "name": "Teostra"
      },
      {
        "id": 48,
        "name": "Tzitzi-Ya-Ku"
      },
      {
        "id": 49,
        "name": "Uragaan"
      },
      {
        "id": 50,
        "name": "Vaal Hazak"
      },
      {
        "id": 51,
        "name": "Xeno'jiiva"
      },
      {
        "id": 52,
        "name": "Zorah Magdaros"
      },
      {
        "id": 53,
        "name": "Leshen"
      },
      {
        "id": 54,
        "name": "Ancient Leshen"
      },
      {
        "id": 55,
        "name": "Safi'jiiva"
      },
      {
        "id": 56,
        "name": "Stygian Zinogre"
      },
      {
        "id": 57,
        "name": "Rajang"
      },
      {
        "id": 58,
        "name": "Viper Tobi-Kadachi"
      },
      {
        "id": 59,
        "name": "Namielle"
      },
      {
        "id": 60,
        "name": "Zinogre"
      }
    ]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
