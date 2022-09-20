import { heroEquipment } from "../Data.js/HeroEquipment";
const armies = {
  "Łowcy Czarownic": {
    heroes: {
      Inkwizytor: {
        id: 0,
        startingEquipment: ["Sztylet", "Buława/Maczuga/Młot bojowy"],
        cost: 75,
        number: 1,
        equipmentList: heroEquipment["Łowcy Czarownic"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 4, 4, 3, 3, 2, 4, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [
          "Arcykapłan",
          "Błogosławieństwo bogów",
          "Czarostwo",
          "Duchowny (modlitwy do Sigmara)",
          "Dowodzenie",
          "Dowódca",
          "Modlitwa",
          "Nienawiść",
        ],
        exp: 20,
        skills: [0, 1, 2, 3, 4, 5],
      },
      "Prezbiter Sigmara": {
        id: 1,
        startingEquipment: ["Sztylet", "Buława/Maczuga/Młot bojowy"],
        cost: 40,
        number: 1,
        equipmentList: heroEquipment["Łowcy Czarownic"].Prezbiter,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [
          "Błogosławieństwo bogów",
          "Czarostwo",
          "Duchowny (modlitwy do Sigmara)",
          "Modlitwa",
          "Nienawiść",
          "Przepastne trzewia",
        ],
        exp: 12,
        skills: [0, 2, 3, 5],
      },
      "Łowca czarownic": {
        id: 2,
        startingEquipment: ["Sztylet", "Miecz"],
        cost: 30,
        number: 3,
        equipmentList: heroEquipment["Łowcy Czarownic"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Nienawiść"],
        exp: 8,
        skills: [0, 1, 4, 5],
      },
      Zelota: {
        id: 3,
        startingEquipment: ["Sztylet"],
        cost: 20,
        number: 99,
        equipmentList: heroEquipment["Łowcy Czarownic"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Chorążowie & sygnaliści"],
      },
      Flagelant: {
        id: 4,
        startingEquipment: ["Cep bojowy"],
        cost: 45,
        number: 5,
        equipmentList: heroEquipment["Łowcy Czarownic"].Flagelant,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 4, 4, 1, 3, 1, 10],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Fanatyk, Furia"],
      },
      "Pies bojowy": {
        id: 5,
        startingEquipment: [],
        cost: 15,
        number: 5,
        equipmentList: {},
        type: "Stronnik",
        stats: {
          Początkowa: [6, 4, 0, 4, 3, 1, 4, 1, 5],
          Maksymalna: [6, 4, 0, 4, 3, 1, 4, 1, 5],
        },
        rules: ["Sfora", "Zwierzę"],
      },
      "Rycerz zakonny": {
        id: 6,
        startingEquipment: [
          "Sztylet",
          "Miecz",
          "Koń bojowy",
          "Siodło & uprząż",
        ],
        cost: 100,
        number: 3,
        equipmentList: heroEquipment["Łowcy Czarownic"].Rycerz,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
          "Koń bojowy": [8, 3, 0, 3, "-", "-", 3, 1, 5],
        },
        rules: ["Duży cel (wierzchem)", "Kawalerzysta", "Szermierz"],
      },
      Pokutnik: {
        id: 7,
        startingEquipment: [],
        cost: 200,
        number: 1,
        equipmentList: {},
        type: "Machina",
        stats: {
          Powóz: ["-", "-", "-", 4, 8, 8, "-", "-", "-"],
          Koń: [8, 3, 1, 3, "-", "-", 3, 1, 5],
          "Koń ": [8, 3, 1, 3, "-", "-", 3, 1, 5],
        },
        rules: ["Duży cel", "Machina wojenna", "Pokutnik", "Powóz", "Strach"],
        exp: 0,
        skills: [],
      },
    },
    limit: 500,
    minModels: 3,
    maxModels: 12,
    name: "Łowcy Czarownic",
    nature: "Neutralna",
    armyRules: ["Kontakty handlowe (3)", "Rozrzutni"],
  },
  "Cyrkowcy z Ligii Ostermarku": {
    heroes: {
      Mecenas: {
        id: 0,
        startingEquipment: ["Sztylet", "Miecz"],
        cost: 60,
        number: 1,
        equipmentList: heroEquipment["Cyrkowcy z Ligii Ostermarku"].Bohaterowie,
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
        startingEquipment: ["Sztylet", "Kostur"],
        cost: 40,
        number: 1,
        equipmentList:
          heroEquipment["Cyrkowcy z Ligii Ostermarku"]["Magister magii"],
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Mag (Tradycja Cienia)"],
        exp: 12,
        skills: [0, 2, 4, 5],
      },
      "Kapłan Ranalda": {
        id: 2,
        startingEquipment: ["Sztylet", "Kostur"],
        cost: 45,
        number: 1,
        equipmentList:
          heroEquipment["Cyrkowcy z Ligii Ostermarku"]["Kapłan Ranalda"],
        type: "Bohater",
        stats: {
          Początkowa: [4, 2, 2, 3, 3, 1, 4, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [
          "Błogosławieństwo bogów",
          "Duchowny (modlitwy do Ranalda)",
          "Kamuflaż",
          "Kieszonkowiec",
          "Modlitwa",
          "Wzgardzony",
        ],
        exp: 12,
        skills: [0, 2, 4, 5],
      },
      Szarlatan: {
        id: 3,
        startingEquipment: ["Sztylet", "Miecz"],
        cost: 35,
        number: 2,
        equipmentList: heroEquipment["Cyrkowcy z Ligii Ostermarku"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Niepokojący"],
        exp: 8,
        skills: [0, 1, 4, 5],
      },
      Treser: {
        id: 4,
        startingEquipment: ["Sztylet", "Łapacz"],
        cost: 25,
        number: 1,
        equipmentList: heroEquipment["Cyrkowcy z Ligii Ostermarku"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Treser"],
        exp: 8,
        skills: [0, 3, 4, 5],
      },
      Cyrkowiec: {
        id: 5,
        startingEquipment: ["Sztylet"],
        cost: 30,
        number: 7,
        equipmentList: heroEquipment["Cyrkowcy z Ligii Ostermarku"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [
          "Akrobata",
          "Chorążowie & sygnaliści",
          "Drużyna obsługi",
          "Wspinaczka",
        ],
      },
      Siłacz: {
        id: 6,
        startingEquipment: ["Sztylet", "Miecz"],
        cost: 45,
        number: 3,
        equipmentList: heroEquipment["Cyrkowcy z Ligii Ostermarku"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 4, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Akrobata", "Siłacz", "Wspinaczka"],
      },
      Żongler: {
        id: 7,
        startingEquipment: ["Sztylet", "Broń miotana(noże)"],
        cost: 45,
        number: 3,
        equipmentList: heroEquipment["Cyrkowcy z Ligii Ostermarku"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 4, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Akrobata", "Nożownik", "Wspinaczka"],
      },
      Woltyżer: {
        id: 8,
        startingEquipment: [
          "Sztylet",
          "Miecz",
          "Łuk",
          "Koń bojowy",
          "Siodło & uprząż",
        ],
        cost: 80,
        number: 3,
        equipmentList: heroEquipment["Cyrkowcy z Ligii Ostermarku"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
          "Koń bojowy": [8, 3, 0, 3, "-", "-", 3, 1, 5],
        },
        rules: [
          "Akrobata",
          "Kawalerzysta",
          "Lekka jazda",
          "Pewny strzał",
          "Wspinaczka",
        ],
      },
      Szablozębny: {
        id: 9,
        startingEquipment: ["Broń naturalna (precyzyjne uderzenie)"],
        cost: 70,
        number: 2,
        equipmentList: {},
        type: "Stronnik",
        stats: {
          Początkowa: [8, 4, 0, 4, 4, 2, 4, 2, 4],
          Maksymalna: [8, 4, 0, 4, 4, 2, 4, 2, 4],
        },
        rules: [
          "Duży cel",
          "Głód krwi",
          "Nienawiść",
          "Rączy",
          "Strach",
          "Zwiadowca",
          "Zwierzę",
        ],
      },
      Ogr: {
        id: 10,
        startingEquipment: ["Maczuga ogrów"],
        cost: 160,
        number: 1,
        equipmentList: heroEquipment["Cyrkowcy z Ligii Ostermarku"].Ogr,
        type: "Stronnik",
        stats: {
          Początkowa: [6, 3, 2, 4, 4, 3, 2, 2, 7],
          Maksymalna: [6, 6, 5, 5, 5, 5, 6, 5, 9],
        },
        rules: [
          "Bycza szarża",
          "Duży cel",
          "Głód trzewi",
          "Oznakowany gnoblar (gnobal-uwaga)",
          "Przepastne trzewia",
          "Strach",
          "Tempy",
          "Wielkolud",
        ],
      },
      Niedźwiedź: {
        id: 11,
        startingEquipment: ["Broń naturalna"],
        cost: 125,
        number: 1,
        equipmentList: {},
        type: "Stronnik",
        stats: {
          Początkowa: [6, 4, 0, 5, 4, 3, 4, 3, 6],
          Maksymalna: [6, 4, 0, 5, 4, 3, 4, 3, 6],
        },
        rules: [
          "Bestia",
          "Bycza szarża",
          "Duży cel",
          "Głód trzewi",
          "Przepastne trzewia",
          "Rączy",
          "Strach",
          "Wielkolud",
          "Zwiadowca",
          "Zwierzę",
        ],
      },
      Zaprzęg: {
        id: 12,
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
        id: 13,
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
    maxModels: 12,
    name: "Cyrkowcy z Ligii Ostermarku",
    nature: "Neutralna",
    armyRules: ["Kontakty handlowe (3)", "Rozrzutni"],
  },
  "Muszkieterzy z Nuln": {
    heroes: {
      Kapitan: {
        id: 0,
        startingEquipment: ["Sztylet", "Miecz"],
        cost: 60,
        number: 1,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Bohaterowie,
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
        startingEquipment: ["Sztylet", "Kostur"],
        cost: 40,
        number: 1,
        equipmentList: {
          "Tradycja Bestii": [0, 4, "Tradycja"],
          "Tradycja Cienia": [0, 4, "Tradycja"],
          "Tradycja Metalu": [0, 4, "Tradycja"],
          "Tradycja Niebios": [0, 4, "Tradycja"],
          "Tradycja Ognia": [0, 4, "Tradycja"],
          "Tradycja Śmierci": [0, 4, "Tradycja"],
          "Tradycja Światła": [0, 4, "Tradycja"],
          "Tradycja Życia": [0, 4, "Tradycja"],
        },
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Mag(Kolegia Magii)"],
        exp: 12,
        skills: [],
      },
      "Prezbiter Sigmara": {
        id: 2,
        startingEquipment: ["Sztylet", "Buława/Maczuga/Młot bojowy"],
        cost: 40,
        number: 1,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Prezbiter,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [
          "Błogosławieństwo bogów",
          "Czarostwo",
          "Duchwony (modlitwy do Sigmara)",
          "Modlitwa",
          "Nienawiść",
          "Przepastne trzewia",
        ],
        exp: 12,
        skills: [0, 1, 2, 3, 4, 5],
      },
      Inżynier: {
        id: 3,
        startingEquipment: ["Sztylet", "Pistolet pojedynkowy"],
        cost: 45,
        number: 1,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 4, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Drużyna obsługi", "Inżynier", "Saper"],
        exp: 8,
        skills: [0, 1, 2, 4, 5],
      },
      Sierżant: {
        id: 4,
        startingEquipment: ["Sztylet", "Miecz"],
        cost: 35,
        number: 1,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 4, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Podofier"],
        exp: 8,
        skills: [0, 3, 4, 5],
      },
      Adiutant: {
        id: 5,
        startingEquipment: ["Sztylet"],
        cost: 15,
        number: 1,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 2, 2, 3, 3, 1, 3, 1, 6],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Przyboczny"],
        exp: 0,
        skills: [0, 1, 4, 5],
      },
      Milicjant: {
        id: 6,
        startingEquipment: ["Sztylet"],
        cost: 20,
        number: 99,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Chorążowie & sygnaliści", "Drużyna obsługi"],
      },
      Muszkieter: {
        id: 7,
        startingEquipment: ["Sztylet", "Muszkiet"],
        cost: 35,
        number: 7,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [],
      },
      "Strażnik miejski": {
        id: 8,
        startingEquipment: ["Sztylet", "Halabarda"],
        cost: 35,
        number: 5,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 4, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Szermierz"],
      },
      Rajtar: {
        id: 9,
        startingEquipment: [
          "Sztylet",
          "Miecz",
          "Pistolet",
          "Koń bojowy",
          "Siodło & uprząż",
        ],
        cost: 80,
        number: 3,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Rajtar,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
          "Koń bojowy": [8, 3, 0, 3, "-", "-", 3, 1, 5],
        },
        rules: ["Kawalerzysta", "Lekka jazda", "Rajtar"],
      },
      "Krasnoludzki Ranger": {
        id: 10,
        startingEquipment: ["Sztylet", "Topór krasnoludów"],
        cost: 45,
        number: 3,
        equipmentList: heroEquipment["Muszkieterzy z Nuln"].Ranger,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 4, 3, 3, 4, 1, 2, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Krzepki",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Ranger",
          "Rankor",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
          "Zwiadowca",
        ],
      },
      "Wóz bojowy": {
        id: 11,
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
        rules: ["Duży cel", "Machina wojenna", "Powóz", "Wóz bojowy"],
      },
      Rydwan: {
        id: 12,
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
    maxModels: 12,
    name: "Muszkieterzy z Nuln",
    nature: "Neutralna",
    armyRules: [],
  },
  "Piechota Morska z Marienburga": {
    heroes: {
      Kapitan: {
        id: 0,
        startingEquipment: ["Sztylet", "Rapier"],
        cost: 60,
        number: 1,
        equipmentList:
          heroEquipment["Piechota Morska z Marienburga"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 4, 4, 3, 3, 2, 4, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Dowódca"],
        exp: 20,
        skills: [0, 1, 2, 3, 4, 5],
      },
      Czarownik: {
        id: 1,
        startingEquipment: ["Sztylet", "Kostur"],
        cost: 45,
        number: 1,
        equipmentList: {
          "Tradycja Bestii": [0, 4, "Tradycja"],
          "Tradycja Cienia": [0, 4, "Tradycja"],
          "Tradycja Metalu": [0, 4, "Tradycja"],
          "Tradycja Niebios": [0, 4, "Tradycja"],
          "Tradycja Ognia": [0, 4, "Tradycja"],
          "Tradycja Śmierci": [0, 4, "Tradycja"],
          "Tradycja Światła": [0, 4, "Tradycja"],
          "Tradycja Życia": [0, 4, "Tradycja"],
        },
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Guślarstwo", "Mag(Kolegia Magii)"],
        exp: 12,
        skills: [],
      },
      "Kapłan Mannana": {
        id: 2,
        startingEquipment: ["Sztylet", "Trójząb"],
        cost: 40,
        number: 1,
        equipmentList: heroEquipment["Piechota Morska z Marienburga"].Kapłan,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 8],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: [
          "Błogosławieństwo bogów",
          "Czarostwo",
          "Duchowny(modlity do Mannana)",
          "Modlitwa",
          "Pogarda",
        ],
        exp: 12,
        skills: [0, 2, 3, 5],
      },
      Bosman: {
        id: 3,
        startingEquipment: ["Sztylet", "Buława/Maczuga/Młot bojowy"],
        cost: 35,
        number: 1,
        equipmentList:
          heroEquipment["Piechota Morska z Marienburga"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 4, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Podoficer"],
        exp: 8,
        skills: [0, 3, 4, 5],
      },
      Mat: {
        id: 4,
        startingEquipment: ["Sztylet"],
        cost: 20,
        number: 2,
        equipmentList:
          heroEquipment["Piechota Morska z Marienburga"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [4, 3, 2, 3, 3, 1, 3, 1, 6],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Przyboczny"],
        exp: 0,
        skills: [0, 1, 4, 5],
      },
      Marynarz: {
        id: 5,
        startingEquipment: ["Sztylet"],
        cost: 20,
        number: 99,
        equipmentList: heroEquipment["Piechota Morska z Marienburga"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Chorążowe & sygnaliści", "Drużyna obsługi"],
      },
      Harpunnik: {
        id: 6,
        startingEquipment: ["Sztylet", "Kusza"],
        cost: 30,
        number: 7,
        equipmentList: heroEquipment["Piechota Morska z Marienburga"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 3, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Ranger", "Zwiadowca"],
      },
      "Żołnierz okrętowy": {
        id: 7,
        startingEquipment: ["Sztylet", "Miecz"],
        cost: 35,
        number: 5,
        equipmentList: heroEquipment["Piechota Morska z Marienburga"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 4, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
        },
        rules: ["Szermierz"],
      },
      Przepatrywacz: {
        id: 8,
        startingEquipment: [
          "Sztylet",
          "Miecz",
          "Włócznia",
          "Koń bojowy",
          "Siodło & uprząż",
        ],
        cost: 80,
        number: 3,
        equipmentList: heroEquipment["Piechota Morska z Marienburga"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [4, 4, 3, 3, 3, 1, 3, 1, 7],
          Maksymalna: [5, 6, 6, 4, 4, 3, 6, 4, 9],
          "Koń bojowy": [8, 3, 0, 3, "-", "-", 3, 1, 5],
        },
        rules: ["Kawalerzysta", "Lekka jazda", "Ranger", "Zwiadowca"],
      },
      Bukanier: {
        id: 9,
        startingEquipment: ["Pistolet", "Pistolet"],
        cost: 55,
        number: 5,
        equipmentList: heroEquipment["Piechota Morska z Marienburga"].Bukanier,
        type: "Stronnik",
        stats: {
          Początkowa: [3, 4, 3, 3, 4, 1, 2, 1, 10],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Fanatyk",
          "Krzepki",
          "Nieustępliwość",
          "Nurek",
          "Ochronne tatuaże",
          "Odporność na magię(2)",
          "Pogromca",
          "Pomiot podmroku",
          "Rajtar",
          "Rankor",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
        ],
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
    name: "Piechota Morska z Marienburga",
    nature: "Neutralna",
    armyRules: ["Kontakty handlowe(3)", "Zamożność"],
  },
  "Leśni Elfowie z Athel Loren": {
    heroes: {
      Szlachcic: {
        id: 0,
        startingEquipment: ["Sztylet", "Łuk elfów"],
        cost: 70,
        number: 1,
        equipmentList: heroEquipment["Leśni Elfowie z Athel Loren"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [5, 5, 5, 3, 3, 2, 6, 1, 9],
          Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
        },
        rules: [
          "Dowódca",
          "Pomiot kniei",
          "Szósty zmysł",
          "Sztuka łucznica",
          "Zasadzka",
        ],
        exp: 20,
        skills: [0, 1, 2, 4, 5],
      },
      "Mag Leśnych Elfów": {
        id: 1,
        startingEquipment: ["Sztylet", "Kostur"],
        cost: 50,
        number: 1,
        equipmentList: heroEquipment["Leśni Elfowie z Athel Loren"].Mag,
        type: "Bohater",
        stats: {
          Początkowa: [5, 4, 4, 3, 3, 1, 5, 1, 8],
          Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
        },
        rules: [
          "Mag(Magia Asrai)",
          "Pomiot kniei",
          "Szósty zmysł",
          "Sztuka łucznica",
          "Zasadzka",
        ],
        exp: 12,
        skills: [0, 1, 2, 4, 5],
      },
      "Wieczny Strażnik": {
        id: 2,
        startingEquipment: ["Sztylet", "Saearath"],
        cost: 45,
        number: 1,
        equipmentList: heroEquipment["Leśni Elfowie z Athel Loren"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [5, 5, 4, 3, 3, 1, 5, 1, 8],
          Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
        },
        rules: ["Pomiot kniei", "Szósty zmysł", "Sztuka łucznica", "Zasadzka"],
        exp: 11,
        skills: [0, 3, 4, 5],
      },
      "Strażnik Ścieżek": {
        id: 3,
        startingEquipment: ["Sztylet", "Łuk Elfów"],
        cost: 45,
        number: 1,
        equipmentList: heroEquipment["Leśni Elfowie z Athel Loren"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [5, 4, 5, 3, 3, 1, 5, 1, 8],
          Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
        },
        rules: [
          "Pomiot kniei",
          "Szósty zmysł",
          "Sztuka łucznica",
          "Zasadzka",
          "Zastawianie pułapek",
        ],
        exp: 11,
        skills: [0, 1, 4, 5],
      },
      "Strażnik Polany": {
        id: 4,
        startingEquipment: ["Sztylet", "Łuk długi"],
        cost: 40,
        number: 12,
        equipmentList: heroEquipment["Leśni Elfowie z Athel Loren"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [5, 4, 4, 3, 3, 1, 5, 1, 8],
          Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
        },
        rules: [
          "Chorążowie & sygnaliści",
          "Pomiot kniei",
          "Szósty zmysł",
          "Sztuka łucznica",
          "Zasadzka",
        ],
      },
      "Strażnik Polany": {
        id: 4,
        startingEquipment: ["Sztylet", "Łuk długi"],
        cost: 40,
        number: 12,
        equipmentList: heroEquipment["Leśni Elfowie z Athel Loren"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [5, 4, 4, 3, 3, 1, 5, 1, 8],
          Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
        },
        rules: [
          "Chorążowie & sygnaliści",
          "Pomiot kniei",
          "Szósty zmysł",
          "Sztuka łucznica",
          "Zasadzka",
        ],
      },
      "Tancerz Wojny": {
        id: 5,
        startingEquipment: ["Sztylet", "Miecz"],
        cost: 50,
        number: 3,
        equipmentList: heroEquipment["Leśni Elfowie z Athel Loren"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [5, 5, 4, 3, 3, 1, 5, 1, 10],
          Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
        },
        rules: [
          "Fanatyk",
          "Ochronne tatuaże",
          "Pomiot kniei",
          "Szósty zmysł",
          "Sztuka łucznica",
          "Tańcie cienia Loeca",
          "Śmigły",
          "Zasadzka",
        ],
      },
      Driada: {
        id: 6,
        startingEquipment: ["Broń naturalna(przebicie pancerza)"],
        cost: 50,
        number: 3,
        equipmentList: {},
        type: "Stronnik",
        stats: {
          Początkowa: [5, 4, 0, 4, 4, 1, 6, 2, 8],
          Maksymalna: [5, 4, 0, 4, 4, 1, 6, 2, 8],
        },
        rules: [
          "Leśny duch",
          "Łatwopalność",
          "Łuskowata skóra(5+)",
          "Oplątanie",
          "Pomiot kniei",
          "Strach",
          "Zasadzka",
        ],
      },
      "Jeździec Polany": {
        id: 7,
        startingEquipment: [
          "Sztylet",
          "Łuk długi",
          "Rumak Elfów",
          "Siodło & uprząż",
        ],
        cost: 80,
        number: 3,
        equipmentList: heroEquipment["Leśni Elfowie z Athel Loren"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [5, 4, 4, 3, 3, 1, 5, 1, 8],
          Maksymalna: [6, 7, 7, 4, 3, 3, 9, 4, 10],
          "Rumak Elfów": [9, 3, 0, 3, "-", "-", 4, 1, 5],
        },
        rules: [
          "Kawalerzysta",
          "Lekka jazda",
          "Pomiot kniei",
          "Szósty zmysł",
          "Sztuka łucznicza",
          "Zasadzka",
        ],
      },
      Drzewoduch: {
        id: 8,
        startingEquipment: ["Broń naturalna(przebicie pancerza)"],
        cost: 150,
        number: 1,
        equipmentList: {},
        type: "Stronnik",
        stats: {
          Początkowa: [5, 4, 0, 5, 5, 3, 3, 3, 8],
          Maksymalna: [5, 4, 0, 5, 5, 3, 3, 3, 8],
        },
        rules: [
          "Bycza szarża",
          "Duży cel",
          "Leśny duch",
          "Łatwopalność",
          "Łuskowata skóra(3+)",
          "Oplątanie",
          "Pomiot kniei",
          "Strach",
          "Wielkolud",
          "Zasadzka",
        ],
      },
      "Wielki orzeł": {
        id: 9,
        startingEquipment: ["Broń naturalna(przebicie pancerza)"],
        cost: 150,
        number: 1,
        equipmentList: {},
        type: "Stronnik",
        stats: {
          Początkowa: [2, 5, 0, 4, 4, 3, 4, 2, 8],
          Maksymalna: [2, 5, 0, 4, 4, 3, 4, 2, 8],
        },
        rules: [
          "Duży cel",
          "Lot",
          "Potwór",
          "Przepastne trzewia",
          "Rączy",
          "Trafienie z uderzenia",
          "Tratowanie",
          "Wielkolud",
          "Wierzchowiec",
          "Zwierzę",
        ],
      },
      "Rydwan Leśnych Elfów": {
        id: 10,
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
    },
    limit: 500,
    minModels: 3,
    maxModels: 12,
    name: "Leśni Elfowie z Athel Loren",
    nature: "Neutralna",
    armyRules: ["Kontakty handlowe(2)", "Podatek", "Rozrzutni"],
  },
  "Khazadzi z Gór Krańca Świata": {
    heroes: {
      Tan: {
        id: 0,
        startingEquipment: ["Sztylet", "Topór krasnoludów"],
        cost: 75,
        number: 1,
        equipmentList:
          heroEquipment["Khazadzi z Gór Krańca Świata"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [3, 5, 4, 4, 4, 2, 3, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Dowodzenie",
          "Dowódca",
          "Krzepki",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Rankor",
          "Rewelator",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
        ],
        exp: 20,
        skills: [0, 1, 2, 3, 5],
      },
      "Kowal Run": {
        id: 1,
        startingEquipment: ["Sztylet", "Buława/Maczuga/Młot bojowy"],
        cost: 50,
        number: 1,
        equipmentList:
          heroEquipment["Khazadzi z Gór Krańca Świata"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [3, 4, 4, 3, 4, 1, 2, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Błogosławieństwo przodków",
          "Kowal run",
          "Krzepki",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Rankor",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
        ],
        exp: 12,
        skills: [0, 2, 3, 5],
      },
      "Mistrz Inżynier": {
        id: 2,
        startingEquipment: ["Sztylet", "Buława/Maczuga/Młot bojowy"],
        cost: 50,
        number: 1,
        equipmentList:
          heroEquipment["Khazadzi z Gór Krańca Świata"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [3, 4, 4, 3, 4, 1, 2, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Drużyna obłsugi",
          "Inżynier",
          "Krzepki",
          "Mistrz inżynier",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Rankor",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
        ],
        exp: 12,
        skills: [0, 1, 2, 3, 5],
      },
      Długobrody: {
        id: 3,
        startingEquipment: ["Sztylet", "Broń wielka"],
        cost: 45,
        number: 1,
        equipmentList:
          heroEquipment["Khazadzi z Gór Krańca Świata"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [3, 5, 3, 3, 4, 1, 2, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Krzepki",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Rankor",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
          "Zimnokrwisty",
        ],
        exp: 10,
        skills: [0, 3, 5],
      },
      "Łamacz Żelaza": {
        id: 4,
        startingEquipment: ["Sztylet", "Topór krasnoludów"],
        cost: 40,
        number: 1,
        equipmentList:
          heroEquipment["Khazadzi z Gór Krańca Świata"].Bohaterowie,
        type: "Bohater",
        stats: {
          Początkowa: [3, 5, 3, 3, 4, 1, 2, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Krzepki",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Rankor",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
          "Żelazoskóry",
        ],
        exp: 8,
        skills: [0, 3, 5],
      },
      "Wojownik Klanowy": {
        id: 5,
        startingEquipment: ["Sztylet"],
        cost: 25,
        number: 12,
        equipmentList: heroEquipment["Khazadzi z Gór Krańca Świata"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [3, 4, 3, 3, 4, 1, 2, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Chorążowie & sygnaliści",
          "Drużyna obsługi",
          "Krzepki",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Rankor",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
        ],
      },
      "Strzelec": {
        id: 6,
        startingEquipment: ["Sztylet"],
        cost: 45,
        number: 5,
        equipmentList: heroEquipment["Khazadzi z Gór Krańca Świata"].Strzelec,
        type: "Stronnik",
        stats: {
          Początkowa: [3, 4, 3, 3, 4, 1, 2, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Błyskawiczne przeładowanie",
          "Krzepki",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Rankor",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
        ],
      },
      "Górnik": {
        id: 7,
        startingEquipment: ["Sztylet","Broń wielka"],
        cost: 40,
        number: 5,
        equipmentList: heroEquipment["Khazadzi z Gór Krańca Świata"].Stronnicy,
        type: "Stronnik",
        stats: {
          Początkowa: [3, 4, 3, 3, 4, 1, 2, 1, 9],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Krzepki",
          "Nieustępliwość",
          "Odporność na magię(2)",
          "Pomiot podmroku",
          "Rankor",
          "Saper",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
          "Zasadzka",
          "Zwiadowca"
        ],
      },
      "Pogromca Trolli": {
        id: 8,
        startingEquipment: ["Topór krasnoludów","Topór krasnoludów","Broń wielka"],
        cost: 50,
        number: 3,
        equipmentList: heroEquipment["Khazadzi z Gór Krańca Świata"].Pogromca,
        type: "Stronnik",
        stats: {
          Początkowa: [3, 4, 3, 3, 4, 1, 2, 1, 10],
          Maksymalna: [4, 7, 6, 4, 5, 3, 5, 4, 10],
        },
        rules: [
          "Fanatyk",
          "Krzepki",
          "Nieustępliwość",
          "Ochronne tatuaże",
          "Odporność na magię(2)",
          "Pogromca",
          "Pomiot podmroku",
          "Rankor",
          "Topory pogromcy",
          "Trudny do zabicia",
          "Uporczywość",
          "Wojownik podziemny",
          "Zabobonny lęk",
        ],
      },
      "Żyrokopter": {
        id: 9,
        startingEquipment: ["Kusza powtarzalna"],
        cost: 150,
        number: 1,
        equipmentList: [],
        type: "Machina",
        stats: {
          Początkowa: [1,"-","-",4,5,5,"-","-","-"],
          Maksymalna: [1,"-","-",4,5,5,"-","-","-"],
        },
        rules: [
          "Bombardowanie",
          "Duży cel",
          "Lot",
          "Machina wojenna",
          "Trafienie z uderzenia",
          "Uporczywość",
          "Zwiadowca"
        ],
      },
    },
    limit: 500,
    minModels: 3,
    maxModels: 12,
    name: "Khazadzi z Gór Krańca Świata",
    nature: "Neutralna",
    armyRules: ["Kontakty handlowe(3)", "Reduta", "Zhańbiony"],
  },
};

export default armies;
