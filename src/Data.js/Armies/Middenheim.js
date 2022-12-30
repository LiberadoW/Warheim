import { heroEquipment } from "../HeroEquipment";

export const middenheim = {
    heroes: {
      Pierworodny: {
        id: 0,
        startingEquipment: [
          "Płaszcz z wilczej skóry",
          "Sztylet",
          "Buława/Maczuga/Młot bojowy",
        ],
        cost: 65,
        number: 1,
        equipmentList: heroEquipment["Zbrojni z Middenheim"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 4, 4, 3, 3, 2, 4, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Dowódca"],
        exp: 20,
        skills: [0, 1, 2, 3, 4, 5],
      },
      "Magister magii": {
        id: 1,
        startingEquipment: ["Sztylet"],
        cost: 40,
        number: 1,
        equipmentList: {
          "Tradycja Metalu": [0, 4, "Tradycja"],
          "Tradycja Niebios": [0, 4, "Tradycja"],
        },
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Mag (Kolegia Magii)"],
        exp: 12,
        skills: [],
      },
      "Kapłan Ulryka": {
        id: 2,
        startingEquipment: [
          "Płaszcz z wilczej skóry",
          "Sztylet",
          "Topór bojowy/Nadziak",
        ],
        cost: 45,
        number: 1,
        equipmentList: heroEquipment["Zbrojni z Middenheim"].Kapłan,
        type: "Bohater",
        stats: {
          Początkowa: [4, 4, 3, 3, 3, 1, 3, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [
          "Błogosławieństwo bogów",
          "Czarostwo",
          "Duchowny (modlitwy do Ulryka)",
          "Modlitwa",
          "Pogarda",
        ],
        exp: 12,
        skills: [0, 2, 3, 5],
      },
      "Wybrany Syn": {
        id: 3,
        startingEquipment: [
          "Płaszcz z wilczej skóry",
          "Sztylet",
          "Buława/Maczuga/Młot bojowy",
        ],
        cost: 40,
        number: 2,
        equipmentList: heroEquipment["Zbrojni z Middenheim"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 4, 3, 4, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Podoficer"],
        exp: 8,
        skills: [0, 3, 4, 5],
      },
      Krewniak: {
        id: 4,
        startingEquipment: [
          "Płaszcz z wilczej skóry",
          "Sztylet",
          "Buława/Maczuga/Młot bojowy",
        ],
        cost: 30,
        number: 1,
        equipmentList: heroEquipment["Zbrojni z Middenheim"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 4, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [],
        exp: 8,
        skills: [0, 3, 4, 5],
      },
      Zbrojny: {
        id: 5,
        startingEquipment: ["Sztylet"],
        cost: 20,
        number: 15,
        equipmentList: heroEquipment["Zbrojni z Middenheim"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 4, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Chorążowie & sygnaliści", "Drużyna obsługi"],
      },
      Łucznik: {
        id: 6,
        startingEquipment: ["Sztylet","Łuk"],
        cost: 25,
        number: 7,
        equipmentList: heroEquipment["Zbrojni z Middenheim"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 4, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Ranger","Zwiadowca"],
      },
      Włócznik: {
        id: 7,
        startingEquipment: ["Sztylet","Włócznia"],
        cost: 35,
        number: 5,
        equipmentList: heroEquipment["Zbrojni z Middenheim"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 4, 3, 4, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Szermierz"],
      },
      Wilczarz: {
        id: 8,
        startingEquipment: ["Broń naturalna"],
        cost: 15,
        number: 5,
        equipmentList: {},
        type: "Stronnik",
        stats: {
          Początkowa: [6,4,0,4,3,1,4,1,5],
          Maksymalna: [6,4,0,4,3,1,4,1,5],
        },
        rules: ["Sfora","Zwierzę"],
      },
      Przepatrywacz: {
        id: 9,
        startingEquipment: [
          "Sztylet",
          "Miecz",
          "Włócznia",
          "Koń bojowy",
          "Siodło & uprząż",
        ],
        cost: 80,
        number: 3,
        equipmentList: heroEquipment["Zbrojni z Middenheim"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
          "Koń bojowy": [8, 3, 0, 3, "-", "-", 3, 1, 5],
        },
        rules: ["Kawalerzysta", "Lekka jazda", "Ranger", "Zwiadowca"],
      },
      Zaprzęg: {
        id: 10,
        startingEquipment: [],
        cost: 175,
        number: 1,
        equipmentList: {},
        type: "Machina",
        stats: {
          Powóz: ["-", "-", "-", 4, 8, 8, "-", "-", "-"],
          Koń: [8, 3, 0, 3, "-", "-", 3, 1, 5],
          "Koń ": [8, 3, 0, 3, "-", "-", 3, 1, 5],
        },
        rules: ["Duży cel", "Kontakty handlowe(3)", "Machina wojenna", "Powóz"],
      },
      Rydwan: {
        id: 11,
        startingEquipment: [],
        cost: 125,
        number: 1,
        equipmentList: {},
        type: "Machina",
        stats: {
          Rydwan: ["-", "-", "-", 5, 5, 8, "-", "-", "-"],
          Koń: [8, 3, 0, 3, "-", "-", 3, 1, 5],
          "Koń ": [8, 3, 0, 3, "-", "-", 3, 1, 5],
        },
        rules: ["Duży cel", "Machina wojenna", "Rydwan"],
      },

    },
    limit: 500,
    minModels: 3,
    maxModels: 15,
    name: "Zbrojni z Middenheim",
    nature: "Neutralna",
    armyRules: [],
    mercenaries: [
      "Bombardier",
      "Gladiator",
      "Goniec",
      "Kartograf",
      "Kupiec",
      "Latarnik",
      "Łowca nagród",
      "Magus",
      "Medyk",
      "Minstrel",
      "Miotacz ołowiu",
      "Ochroniarz",
      "Ordynans",
      "Pogromca Trolli",
      "Poszukiwacz złota",
      "Rozbójnik",
      "Rycerz najemny",
      "Skryba",
      "Strażnik dróg",
      "Szczurołap",
      "Szpieg",
      "Tileański kusznik",
      "Trefniś",
      "Woźnica",
      "Wróżbita",
      "Złodziej",
      "Zwadźca",
      "Zwiadowca",
    ],
  }