import { heroEquipment } from "../HeroEquipment";

export const wysokie = {
  heroes: {
    Szlachic: {
      id: 0,
      startingEquipment: ["Sztylet", "Miecz"],
      cost: 75,
      number: 1,
      equipmentList:
        heroEquipment["Elfowie Wysokiego Rodu z Ulthuan"].Bohaterowie,
      type: "Bohater",
      stats: {
        Początkowa: [5, 5, 5, 3, 3, 2, 6, 1, 9],
        Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
      },
      rules: ["Dowodzenie", "Dowódca", "Szósty zmysł", "Zasadzka"],
      exp: 20,
      skills: [0, 1, 2, 4, 5],
    },
    "Mag Elfów Wysokiego Rodu": {
      id: 1,
      startingEquipment: ["Sztylet", "Kostur"],
      cost: 55,
      number: 1,
      equipmentList: heroEquipment["Elfowie Wysokiego Rodu z Ulthuan"].Mag,
      type: "Bohater",
      stats: {
        Początkowa: [5, 4, 4, 3, 3, 1, 5, 1, 8],
        Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
      },
      rules: [
        "Mag (Wysokia Magia)",
        "Mistrz Magii",
        "Wiedza tajemna (Kolegia Magii)",
        "Szósty zmysł",
      ],
      exp: 12,
      skills: [0, 2, 4, 5],
    },
    "Biały Lew": {
      id: 2,
      startingEquipment: ["Sztylet", "Topór z Chrace", "Płaszcz ze skóry lwa"],
      cost: 50,
      number: 1,
      equipmentList:
        heroEquipment["Elfowie Wysokiego Rodu z Ulthuan"].Bohaterowie,
      type: "Bohater",
      stats: {
        Początkowa: [5, 5, 4, 4, 3, 1, 5, 1, 8],
        Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
      },
      rules: ["Szósty zmysł", "Żywa tarcza", "Gwardia Lwa"],
      exp: 11,
      skills: [0, 3, 4, 5],
    },
    "Mistrz Miecza Hoetha": {
      id: 3,
      startingEquipment: ["Sztylet", "Broń wielka"],
      cost: 60,
      number: 1,
      equipmentList:
        heroEquipment["Elfowie Wysokiego Rodu z Ulthuan"].Bohaterowie,
      type: "Bohater",
      stats: {
        Początkowa: [5, 6, 4, 3, 3, 1, 5, 1, 8],
        Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
      },
      rules: ["Szermierz", "Szósty zmysł", "Żywa tarcza"],
      exp: 11,
      skills: [0, 2, 3, 4, 5],
    },
    Łucznik: {
      id: 4,
      startingEquipment: ["Sztylet", "Łuk długi"],
      cost: 45,
      number: 12,
      equipmentList:
        heroEquipment["Elfowie Wysokiego Rodu z Ulthuan"].Stronnicy,
      type: "Stronnik",
      stats: {
        Początkowa: [5, 4, 4, 3, 3, 1, 5, 1, 8],
        Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
      },
      rules: ["Chorążowie & sygnaliści", "Drużyna obsługi", "Szósty zmysł"],
    },
    Włócznik: {
      id: 5,
      startingEquipment: ["Sztylet", "Włócznia"],
      cost: 45,
      number: 5,
      equipmentList:
        heroEquipment["Elfowie Wysokiego Rodu z Ulthuan"].Stronnicy,
      type: "Stronnik",
      stats: {
        Początkowa: [5, 4, 4, 3, 3, 1, 5, 1, 8],
        Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
      },
      rules: ["Szermierz", "Szósty zmysł"],
    },
    "Srebrny Hełm": {
      id: 6,
      startingEquipment: [
        "Sztylet",
        "Miecz",
        "Kopia",
        "Rumak elfów",
        "Siodło & uprząż",
      ],
      cost: 100,
      number: 3,
      equipmentList: heroEquipment["Elfowie Wysokiego Rodu z Ulthuan"].Srebrny,
      type: "Stronnik",
      stats: {
        Początkowa: [5, 4, 4, 3, 3, 1, 5, 1, 8],
        Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
        "Rumak Elfów": [9, 3, 0, 3, "-", "-", 4, 1, 5],
      },
      rules: [
        "Duży cel (wierzchem)",
        "Kawalerzysta",
        "Szermierz",
        "Szósty zmysł",
      ],
    },
    "Wojownik Cienia": {
      id: 7,
      startingEquipment: ["Sztylet", "Miecz"],
      cost: 50,
      number: 5,
      equipmentList:
        heroEquipment["Elfowie Wysokiego Rodu z Ulthuan"].Stronnicy,
      type: "Stronnik",
      stats: {
        Początkowa: [5, 5, 4, 3, 3, 1, 5, 1, 8],
        Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
      },
      rules: [
        "Błyskawiczne przeładowanie",
        "Nienawiść",
        "Ranger",
        "Szósty zmysł",
        "Zasadzka",
        "Zwiadowca",
      ],
    },
    "Rydwan z Tiranoc": {
      id: 8,
      startingEquipment: [],
      cost: 150,
      number: 1,
      equipmentList: {},
      type: "Machina",
      stats: {
        Rydwan: ["-", "-", "-", 5, 5, 8, "-", "-", "-"],
        "Rumak Elfów": [9, 3, 0, 3, "-", "-", 4, 1, 5],
        "Rumak Elfów ": [9, 3, 0, 3, "-", "-", 4, 1, 5],
      },
      rules: ["Duży cel", "Machina wojenna", "Rydwan"],
    },
    "Lwi Rydwan z Chrace": {
      id: 9,
      startingEquipment: [],
      cost: 175,
      number: 1,
      equipmentList: {},
      type: "Machina",
      stats: {
        Rydwan: ["-", "-", "-", 5, 5, 8, "-", "-", "-"],
        "Lew bojowy": [7, 5, 0, 5, "-", "-", 4, 2, 5],
        "Lew bojowy ": [7, 5, 0, 5, "-", "-", 4, 2, 5],
      },
      rules: ["Duży cel", "Machina wojenna", "Rydwan", "Strach"],
    },
  },
  limit: 500,
  minModels: 3,
  maxModels: 12,
  name: "Elfowie Wysokiego Rodu z Ulthuan",
  nature: "Neutralna",
  armyRules: ["Kontakty handlowe (3)", "Podatek", "Rozrzutni", "Zamożność"],
  mercenaries: ["Minstrel", "Strażnik Morski z Lothern", "Zwiadowca"],
};
