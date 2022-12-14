import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Builder from "./Builder";
import "../styles/style.css";
import ArmyList from "../Components/ArmyList";
import useShareStatesBetweenTabs from "react-share-states-between-tabs";
import armies from "../Data.js/Armies";


const App = () => {
  const [unitList, setUnitList] = useShareStatesBetweenTabs("unitList", []);
  const [army, setArmy] = useShareStatesBetweenTabs(
    "army",
    window.localStorage.hasOwnProperty("army")
      ? JSON.parse(window.localStorage.getItem("army"))
      : "Cyrkowcy z Ligii Ostermarku"
  );
  const [unitName, setUnitName] = useState("");
  const [mercenaryUnitName,setMercenaryUnitName] = useState("")
  const [prestige, setPrestige] = useShareStatesBetweenTabs("prestige", 0);
  const [armyName, setArmyName] = useShareStatesBetweenTabs("army-name", "");
  const newUnitList = [...unitList];

  const numberOfHeroes = newUnitList.filter((x) => x.type === "Bohater").length;

  for (let i = 0; i < 6 - numberOfHeroes; i++) {
    newUnitList.push({
      unitName: "",
      unitDisplayName: "",
      id: 1000,
      optionalEquipment: [],
      cost: 0,
      totalCost: 0,
      startingEquipment: [],
      stats: {
        Początkowa: ["", "", "", "", "", "", "", "", ""],
        Maksymalna: ["", "", "", "", "", "", "", "", ""],
      },
      rules: [],
      exp: "",
      skills: [""],
      type: "Bohater",
      number: "",
      selectedNumber: "",
    });
  }

  const numberOfHenchmen = newUnitList.filter(
    (unit) =>
      unit.type === "Stronnik" ||
      unit.type === "Machina" ||
      unit.type === "Najemne Ostrze"
  ).length;

  for (let i = 0; i < 7 - numberOfHenchmen; i++) {
    newUnitList.push({
      unitName: "",
      unitDisplayName: "",
      id: 1000,
      optionalEquipment: [],
      cost: 0,
      totalCost: 0,
      startingEquipment: [],
      stats: {
        Początkowa: ["", "", "", "", "", "", "", "", ""],
        Maksymalna: ["", "", "", "", "", "", "", "", ""],
      },
      rules: [],
      exp: "",
      skills: [""],
      type: "Stronnik",
      number: "  ",
      selectedNumber: "  ",
    });
  }

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Builder
                unitList={unitList}
                setUnitList={setUnitList}
                army={armies[army]}
                setArmy={setArmy}
                unitName={unitName}
                setUnitName={setUnitName}
                mercenaryUnitName = {mercenaryUnitName}
                setMercenaryUnitName = {setMercenaryUnitName}
                prestige={prestige}
                setPrestige={setPrestige}
                setArmyName={setArmyName}
              />
            }
          />
          <Route
            path="/armylist"
            element={
              <ArmyList
                unitList={newUnitList}
                heroes={armies[army].heroes}
                unitName={unitName}
                setUnitList={setUnitList}
                army={armies[army]}
                prestige={prestige}
                armyName={armyName}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
