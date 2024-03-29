import React, { useEffect, useState, useRef } from "react";
import "../styles/WeaponList.css";
import { disableButtons } from "../Functions/disableButtons";
import mageEquipmentList from "../Data.js/MageEquipmentList";
import findCommonElements from "../Functions/findCommonElements";
import { getItemText } from "../Functions/getItemText";

const WeaponList = ({ heroes, id, unitList, setUnitList }) => {
  const commandGroupUnit = unitList[id];

  const [checked, setChecked] = useState(
    commandGroupUnit.commandGroup ? commandGroupUnit : ""
  );

  const isCommandGroup = unitList[id].rules.includes("Chorążowie & sygnaliści");
  const isWeaponTeam = unitList[id].rules.includes("Duża dźgacz");

  const [isPromptShown, setIsPromptShown] = useState(null);
  const [promptUnit, setPromptUnit] = useState(null);
  const [delayHandler, setDelayHandler] = useState(null);
  const [numberOfShootingWeapons, setNumberOfShootingWeapons] = useState(0);
  const [areShootingWeaponsDisabled, setAreShootingWeaponsDisabled] =
    useState(false);

  const handleMouseEnter = (e) => {
    setPromptUnit(
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.id
    );
    setDelayHandler(
      setTimeout(() => {
        setIsPromptShown(e.target.id);
      }, 1000)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
    setIsPromptShown(null);
    setPromptUnit(null);
  };

  const unitArray = Array.from(document.querySelectorAll(".unit"));

  console.log(unitList[id])

  useEffect(() => {
    const equipment = {};
    unitList[id].optionalEquipment
      .concat(unitList[id].startingEquipment)
      .forEach((item) => {
        equipment[item] = unitList[id].equipmentList[item];
      });
    const numberOfShootingWeapons = Object.values(equipment).filter(
      (a) => a[1] === 1
    ).length;

    if (numberOfShootingWeapons >= 2) {
      setAreShootingWeaponsDisabled(true);
    } else {
      setAreShootingWeaponsDisabled(false);
    }
  });

  useEffect(() => {
    const numberOfCloseCombatWeaponsArray = [];

    unitArray.forEach((item, index) => {
      const closeCombatWeapons = document.querySelectorAll(
        `div.unit[id='${String(index)}'] ul[class='0'] li input`
      );
      const closeCombatWeaponsArray = Array.from(closeCombatWeapons);
      const dagger = closeCombatWeaponsArray.find((el) => el.name == "Sztylet");
      const closeCombatWeaponsArrayWithoutDagger = [...closeCombatWeaponsArray];
      closeCombatWeaponsArrayWithoutDagger.splice(
        closeCombatWeaponsArrayWithoutDagger.indexOf(dagger),
        1
      );
      const number2 = closeCombatWeaponsArrayWithoutDagger.filter(
        (item) => item.checked === true
      ).length;
      numberOfCloseCombatWeaponsArray.push(number2);

      if (number2 >= 2) {
        closeCombatWeaponsArray.forEach((item) => {
          if (item.checked === false) {
            item.disabled = true;
          }
        });
      } else {
        closeCombatWeaponsArray.forEach((item) => {
          if (item.checked === false) {
            item.disabled = false;
          }
        });
      }
    });
    console.log(numberOfCloseCombatWeaponsArray);
  });

  useEffect(() => {
    unitArray.forEach((item, index) => {
      disableButtons("Zbroja", index);
      disableButtons("Tarcza", index);
      disableButtons("Choice", index);
      disableButtons("Tradycja", index);
      disableButtons("Startowy1", index);
    });
  });

  const handleWeaponListClick = (e) => {
    const unit = unitList[e.target.className];
    const equipmentList = unit.optionalEquipment;

    if (unit.unitName === "Dziki Ork") {
      if (e.target.name === "Duża dźgacz") {
        console.log("poopie");
      }
    }

    if (unit.unitName === "Troll") {
      if (e.target.name === "Troll Górski" && e.target.checked === true) {
        unit.rules = [
          "Bycza szarża",
          "Duży cel",
          "Głód trzewi",
          "Głupota",
          "Nieświadomy",
          "Niezłomność",
          "Ochronne tatuaże",
          "Przepastne trzewia",
          "Regeneracja",
          "Strach",
          "Wielkolud",
          "Żrąca plwocina",
          "Odporność na magię (2)",
          "Łuskowata skóra (5+)",
          "Pomiot podmroku",
        ];
      } else if (
        e.target.name === "Troll Rzeczny" &&
        e.target.checked === true
      ) {
        unit.rules = [
          "Bycza szarża",
          "Duży cel",
          "Głód trzewi",
          "Głupota",
          "Nieświadomy",
          "Niezłomność",
          "Ochronne tatuaże",
          "Przepastne trzewia",
          "Regeneracja",
          "Strach",
          "Wielkolud",
          "Żrąca plwocina",
          "Nurek",
          "Stygmat Nurgla (odór)",
          "Wodny",
        ];
      } else {
        unit.rules = [
          "Bycza szarża",
          "Duży cel",
          "Głód trzewi",
          "Głupota",
          "Nieświadomy",
          "Niezłomność",
          "Ochronne tatuaże",
          "Przepastne trzewia",
          "Regeneracja",
          "Strach",
          "Wielkolud",
          "Żrąca plwocina",
        ];
      }
    }

    const spellSchools = Object.fromEntries(
      Object.entries(unit.equipmentList).filter(
        ([key]) => key.includes("Tradycja") || key.includes("Magia")
      )
    );

    if (e.target.name.includes("Tradycja") || e.target.name.includes("Magia")) {
      const mageEquipment = mageEquipmentList[e.target.name].equipment;

      if (unit.rules.includes(e.target.name)) {
        unit.rules.splice(unit.rules.indexOf(e.target.name), 1);
      } else {
        unit.rules.push(e.target.name);
      }

      if (e.target.checked === true) {
        if (
          Object.values(unit.equipmentList).filter((x) => x.length === 2)
            .length === 0
        ) {
          Object.entries(mageEquipment).forEach(([key, value]) => {
            unit.equipmentList[key] = value;
          });
        }

        if (unit.unitName !== "Panna Graala") {
          if (heroes[unit.unitName].skills.length === 0) {
            unit.skills = mageEquipmentList[e.target.name].skills;
          }
        } else {
          unit.equipmentList["Rumak"] = [55, 3];
        }
      } else {
        const differentEquipmentNames = Object.keys(unit.equipmentList).filter(
          (x) => Object.keys(mageEquipment).includes(x)
        );

        if (
          JSON.stringify(differentEquipmentNames) ==
          JSON.stringify(Object.keys(mageEquipment))
        ) {
          unit.equipmentList = spellSchools;
        }

        unit.optionalEquipment = [];
        unit.cost = heroes[unit.unitName].cost;

        if (unit.unitName !== "Panna Graala") {
          if (heroes[unit.unitName].skills.length === 0) {
            unit.skills = [];
          }
        } else {
          unit.equipmentList["Rumak"] = [55, 3];
        }
      }
    } else {
      if (equipmentList.includes(e.target.name)) {
        equipmentList.splice(equipmentList.indexOf(e.target.name), 1);
      } else {
        equipmentList.push(e.target.name);
      }
    }

    if (e.target.name === "Rumak") {
      if (e.target.checked === true) {
        unit.stats["Rumak"] = [8, 3, 0, 3, "-", "-", 3, 1, 5];
      } else {
        delete unit.stats["Rumak"];
      }
    }

    if (e.target.name === "Wielki wilk") {
      if (e.target.checked === true) {
        unit.stats["Wielki wilk"] = [9, 3, 0, 4, "-", "-", 3, 1, 3];
      } else {
        delete unit.stats["Wielki wilk"];
      }
    }

    // for units which have options for starting weapons
    const startingWeapons = Array.from(
      document.querySelectorAll(
        `div.unit[id='${String(id)}'] [data='Startowy']`
      )
    ).concat(
      Array.from(
        document.querySelectorAll(
          `div.unit[id='${String(id)}'] [data='Startowy1']`
        )
      )
    );

    if (startingWeapons.includes(e.target)) {
      const howManyChecked = startingWeapons.filter(
        (x) => x.checked === true
      ).length;

      if (howManyChecked === 1) {
        unit.cost = e.target.checked
          ? unit.cost + 0
          : unit.cost - Number(e.target.value);
      } else if (howManyChecked === 0) {
        unit.cost = e.target.checked ? unit.cost + 0 : unit.cost - 0;
      } else {
        unit.cost = e.target.checked
          ? unit.cost + Number(e.target.value)
          : unit.cost - Number(e.target.value);
      }
    } else {
      unit.cost = e.target.checked
        ? unit.cost + Number(e.target.value)
        : unit.cost - Number(e.target.value);
    }

    if (isCommandGroup) {
      const commandGroupArray = Array.from(
        document.querySelectorAll("input[data='Dowodzenie']")
      );
      const howManyCommandChecked = commandGroupArray.filter(
        (x) => x.checked === true
      ).length;
      unit.totalCost =
        unit.cost * unit.selectedNumber + howManyCommandChecked * 20;
    } else {
      unit.totalCost = unit.cost * unit.selectedNumber;
    }

    const newUnitList = [...unitList];
    setUnitList(newUnitList);
  };

  const handleWeaponListClick2 = (e) => {
    const unit = unitList[e.target.className];
    const equipmentList = unitList[e.target.className].optionalEquipment;

    if (
      equipmentList
        .concat(unitList[id].startingEquipment)
        .filter((x) => x === e.target.name).length === 2
    ) {
      equipmentList.splice(equipmentList.indexOf(e.target.name), 1);
    } else {
      equipmentList.push(e.target.name);
    }

    // for units which have options for starting weapons
    const startingWeapons = Array.from(
      document.querySelectorAll(
        `div.unit[id='${String(id)}'] [data='Startowy']`
      )
    ).concat(
      Array.from(
        document.querySelectorAll(
          `div.unit[id='${String(id)}'] [data='Startowy1']`
        )
      )
    );

    if (startingWeapons.includes(e.target)) {
      const howManyChecked = startingWeapons.filter(
        (x) => x.checked === true
      ).length;

      if (howManyChecked === 1) {
        unit.cost = e.target.checked
          ? unit.cost + 0
          : unit.cost - Number(e.target.value);
      } else if (howManyChecked === 0) {
        unit.cost = e.target.checked ? unit.cost + 0 : unit.cost - 0;
      } else {
        unit.cost = e.target.checked
          ? unit.cost + Number(e.target.value)
          : unit.cost - Number(e.target.value);
      }
    } else {
      unit.cost = e.target.checked
        ? unit.cost + Number(e.target.value)
        : unit.cost - Number(e.target.value);
    }

    if (isCommandGroup) {
      const commandGroupArray = Array.from(
        document.querySelectorAll("input[data='Dowodzenie']")
      );
      const howManyCommandChecked = commandGroupArray.filter(
        (x) => x.checked === true
      ).length;
      unit.totalCost =
        unit.cost * unit.selectedNumber + howManyCommandChecked * 20;
    } else {
      unit.totalCost = unit.cost * unit.selectedNumber;
    }

    const newUnitList = [...unitList];
    setUnitList(newUnitList);
  };

  const handleCommandGroupClick = (e) => {
    const allCommandGroupButtonsArray = Array.from(
      document.querySelectorAll("input[name='command-group-checkbox']")
    );

    if (
      allCommandGroupButtonsArray.filter((x) => x.checked === true).length === 1
    ) {
      allCommandGroupButtonsArray
        .filter((x) => x.checked === false)
        .forEach((item) => {
          item.disabled = true;
        });
    } else {
      allCommandGroupButtonsArray.forEach((item) => (item.disabled = false));
    }

    setChecked(e.target.checked);
    const unit = unitList[e.target.className];

    unit.commandGroup = e.target.checked;

    const equipmentList = unitList[e.target.className].optionalEquipment;

    if (e.target.name != "command-group-checkbox") {
      if (equipmentList.includes(e.target.name)) {
        equipmentList.splice(equipmentList.indexOf(e.target.name), 1);
      } else {
        equipmentList.push(e.target.name);
      }
    }

    const commandGroupArray = Array.from(
      document.querySelectorAll("input[data='Dowodzenie']")
    );
    const howManyCommandChecked = commandGroupArray.filter(
      (x) => x.checked === true
    ).length;

    unit.selectedNumber = howManyCommandChecked > 0 ? howManyCommandChecked : 1;

    unit.totalCost =
      unit.cost * unit.selectedNumber + howManyCommandChecked * 20;

    if (!unit.commandGroup) {
      if (equipmentList.includes("Chorąży")) {
        equipmentList.splice(equipmentList.indexOf("Chorąży"), 1);
      }
      if (equipmentList.includes("Sygnalista")) {
        equipmentList.splice(equipmentList.indexOf("Sygnalista"), 1);
      }
      unit.selectedNumber = 1;
      unit.totalCost = unit.cost * unit.selectedNumber;
    }

    unit.number = unit.commandGroup ? 2 : heroes[unit.unitName].number;

    const newUnitList = [...unitList];
    setUnitList(newUnitList);
  };

  const equipmentTypeArr = [{}, {}, {}, {}, {}];
  const equipmentTypeNames = [
    "Broń do walki wręcz",
    "Broń dystansowa",
    "Pancerz",
    "Specjalne",
    "Kolegia Magii",
  ];

  Object.keys(unitList[id].equipmentList).forEach((item) => {
    equipmentTypeArr[unitList[id].equipmentList[item][1]][item] =
      unitList[id].equipmentList[item];
  });

  return (
    <div className="equipment-list-container">
      <div className="equipment-list-name">
        {Object.keys(unitList[id].equipmentList).length === 0 ? null : (
          <h4>Lista ekiwpunku</h4>
        )}
      </div>
      <div className="equipment-list">
        {equipmentTypeArr.map((item, indexMain) => {
          if (Object.keys(item).length > 0) {
            return (
              <div className="equipment-type-list" key={`${indexMain}1`}>
                <h4>{equipmentTypeNames[indexMain]}</h4>
                <ul className={indexMain}>
                  {Object.entries(item).map(([key, value], index) => {
                    const isStartingEquipment = findCommonElements(
                      unitList[id].startingEquipment,
                      key
                    );

                    return (
                      <li key={`${index}3`}>
                        <span
                          style={{
                            marginRight: value[0] < 9 ? "15px" : "8.6px",
                          }}
                        >{`${value[0]} zk `}</span>
                        <input
                          onClick={handleWeaponListClick}
                          checked={
                            unitList[id].optionalEquipment.includes(key) ||
                            isStartingEquipment
                          }
                          data={value[2]}
                          name={key}
                          value={value[0]}
                          className={id}
                          type="checkbox"
                          disabled={
                            unitList[id].startingEquipment.includes(key) ||
                            isStartingEquipment ||
                            (!unitList[id].optionalEquipment.includes(key) && areShootingWeaponsDisabled)

                          }
                          readOnly
                        ></input>
                        {indexMain <= 1 && (
                          <input
                            onClick={handleWeaponListClick2}
                            checked={
                              unitList[id].optionalEquipment
                                .concat(unitList[id].startingEquipment)
                                .filter((x) => x === key).length === 2
                            }
                            data={value[2]}
                            name={key}
                            value={value[0]}
                            className={id}
                            type="checkbox"
                            disabled={
                              unitList[id].startingEquipment.filter(
                                (x) => x === key
                              ).length === 2 ||
                              areShootingWeaponsDisabled
                            }
                            readOnly
                          ></input>
                        )}
                        <span
                          className="equipment-text"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          id={key}
                        >
                          {key}
                        </span>
                        {isPromptShown == key && (
                          <p className="equipment-tooltip">
                            {getItemText(key, unitList[promptUnit])}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        })}
        {isCommandGroup && (
          <div className="equipment-type-list">
            <h4>Specjalne</h4>
            <ul onChange={handleCommandGroupClick}>
              <li>
                <input
                  type="checkbox"
                  checked={checked}
                  className={id}
                  name="command-group-checkbox"
                  readOnly
                ></input>
                Grupa dowodzenia
              </li>
              {checked && (
                <>
                  <li>
                    <input
                      type="checkbox"
                      className={id}
                      name="Chorąży"
                      checked={unitList[id].optionalEquipment.includes(
                        "Chorąży"
                      )}
                      data="Dowodzenie"
                      readOnly
                    />
                    Chorąży
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className={id}
                      name="Sygnalista"
                      checked={unitList[id].optionalEquipment.includes(
                        "Sygnalista"
                      )}
                      data="Dowodzenie"
                      readOnly
                    />
                    Sygnalista
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
      {}
    </div>
  );
};

export default WeaponList;
