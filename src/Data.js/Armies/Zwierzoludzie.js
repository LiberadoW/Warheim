import { heroEquipment } from "../HeroEquipment";

export const zwierzoludzie = {
  heroes: {
    "Herszt Zwierzoludzi": {
      id: 0,
      startingEquipment: ["Sztylet", "Broń wielka"],
      cost: 80,
      number: 1,
      equipmentList: heroEquipment["Zbrojne Stado Zwierzoludzi"].Bohaterowie,
      type: "Bohater",
      stats: {
        Początkowa: [5, 4, 3, 4, 4, 2, 4, 1, 7],
        Maksymalna: [6, 7, 6, 4, 5, 4, 6, 4, 9],
      },
      rules: ["Dowódca", "Pomiot kniei", "Zasadzka"],
      exp: 20,
      skills: [0, 3, 4, 5],
    },
    "szaman Zwierzoludzi": {
      id: 1,
      startingEquipment: ["Sztylet", "Kostur Rykowca"],
      cost: 55,
      number: 1,
      equipmentList: heroEquipment["Zbrojne Stado Zwierzoludzi"].Szaman,
      type: "Bohater",
      stats: {
        Początkowa: [5, 4, 3, 3, 4, 1, 4, 1, 6],
        Maksymalna: [6, 7, 6, 4, 5, 4, 6, 4, 9],
      },
      rules: [
        "Mag (Dziedzina Chaosu albo Dziedzina Dziczy",
        "Pomiot kniei",
        "Zasadzka",
      ],
      exp: 11,
      skills: [0, 4, 5],
    },
    Bestigor: {
      id: 2,
      startingEquipment: ["Sztylet", "Topór bojowy/Nadziak"],
      cost: 55,
      number: 2,
      equipmentList: heroEquipment["Zbrojne Stado Zwierzoludzi"].Bohaterowie,
      type: "Bohater",
      stats: {
        Początkowa: [5, 4, 3, 4, 4, 1, 3, 1, 7],
        Maksymalna: [6, 7, 6, 4, 5, 4, 6, 4, 9],
      },
      rules: ["Pomiot kniei"],
      exp: 8,
      skills: [0, 3, 5],
    },
    Centigor: {
      id: 3,
      startingEquipment: ["Sztylet", "Włócznia"],
      number: 1,
      equipmentList: heroEquipment["Zbrojne Stado Zwierzoludzi"].Bohaterowie,
      type: "Bohater",
      stats: {
        Początkowa: [8, 4, 3, 4, 4, 1, 2, 1, 7],
        Maksymalna: [9, 7, 6, 4, 5, 4, 6, 4, 9],
      },
      rules: ["Alkoholizm", "Bycza szarża", "Centaur", "Pomiot kniei"],
      exp: 8,
      skills: [0, 3, 5],
    },
    Ungor: {
      id: 4,
      startingEquipment: ["Sztylet"],
      cost: 30,
      number: 15,
      equipmentList: heroEquipment["Zbrojne Stado Zwierzoludzi"].Ungor,
      type: "Stronnik",
      stats: {
        Początkowa: [5, 3, 3, 3, 3, 1, 3, 1, 6],
        Maksymalna: [6, 6, 6, 4, 4, 3, 7, 4, 7],
      },
      rules: [
        "Berserk",
        "Chorążowie & sygnaliści",
        "Pomiot kniei",
        "Stan niższy",
        "Zasadzka",
        "Żywa tarcza",
      ],
    },
    Grabieżcy: {
      id: 5,
      startingEquipment: ["Sztylet", "Krótki łuk"],
      cost: 35,
      number: 5,
      equipmentList: heroEquipment["Zbrojne Stado Zwierzoludzi"].Ungor,
      type: "Stronnik",
      stats: {
        Początkowa: [5, 3, 3, 3, 3, 1, 3, 1, 6],
        Maksymalna: [6, 6, 6, 4, 4, 3, 7, 4, 7],
      },
      rules: [
        "Berserk",
        "Pomiot kniei",
        "Ranger",
        "Stan niższy",
        "Światowiec",
        "Zasadzka",
        "Zwiadowca",
        "Żywa tarcza",
      ],
    },
    Harpia: {
      id: 6,
      startingEquipment: ["Broń naturalna (szybki)"],
      cost: 35,
      number: 5,
      equipmentList: {},
      type: "Stronnik",
      stats: {
        Początkowa: [4, 4, 0, 4, 3, 1, 4, 2, 6],
        Maksymalna: [4, 4, 0, 4, 3, 1, 4, 2, 6],
      },
      rules: [
        "Głód krwi",
        "Lot",
        "Nadrzewni drapieżcy",
        "Rozmiar rzondzi",
        "Zwierzę",
      ],
    },
    Gor: {
      id: 7,
      startingEquipment: ["Sztylet", "Topór bojowy/Nadziak"],
      cost: 45,
      number: 5,
      equipmentList: heroEquipment["Zbrojne Stado Zwierzoludzi"].Stronnicy,
      type: "Stronnik",
      stats: {
        Początkowa: [5, 4, 3, 3, 4, 1, 3, 1, 6],
        Maksymalna: [6, 7, 6, 4, 5, 4, 6, 4, 9],
      },
      rules: ["Berserk", "Pomiot kniei", "Zasadzka"],
    },
    "Wilczarz Chaosu": {
      id: 8,
      startingEquipment: ["Broń naturalna"],
      cost: 20,
      number: 5,
      equipmentList: {},
      type: "Stronnik",
      stats: {
        Początkowa: [7, 4, 0, 4, 3, 1, 3, 1, 5],
        Maksymalna: [7, 4, 0, 4, 3, 1, 3, 1, 5],
      },
      rules: ["Pomiot kniei", "Rączy", "Zasadzka", "Zwierzę"],
    },
    "Ogr Chaosu": {
      id: 9,
      startingEquipment: ["Broń wielka"],
      cost: 200,
      number: 1,
      equipmentList: heroEquipment["Zbrojne Stado Zwierzoludzi"].Minotaur,
      type: "Stronnik",
      stats: {
        Początkowa: [6, 4, 3, 4, 4, 3, 4, 2, 8],
        Maksymalna: [6, 6, 5, 5, 5, 5, 6, 5, 9],
      },
      rules: [
        "Bycza szarża",
        "Duży cel",
        "Głód krwi",
        "Głód trzewi",
        "Pomiot kniei",
        "Przepastne trzewia",
        "Strach",
        "Stygmat Chaosu",
        "Tempy",
        "Wielkolud",
      ],
    },
    "Rydwan Zwierzoludzi": {
      id: 10,
      startingEquipment: [],
      cost: 125,
      number: 1,
      equipmentList: {},
      type: "Machina",
      stats: {
        Rydwan: ["-", "-", "-", 5, 5, 8, "-", "-", "-"],
        Tuskgor: [7, 3, 0, 3, "-", "-", 2, 1, 3],
        "Tuskgor ": [7, 3, 0, 3, "-", "-", 2, 1, 3],
      },
      rules: ["Duży cel", "Machina wojenna", "Rydwan", "Szarża dzików"],
    },
  },
  limit: 500,
  minModels: 3,
  maxModels: 15,
  name: "Zbrojne Stadio Zwierzoludzi",
  nature: "Chaotyczna",
  armyRules: ["Oko Chaosu", "Podatek", "Rozrzutni", "Znak Chaosu"],
  mercenaries: [],
};