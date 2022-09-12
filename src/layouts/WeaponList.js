import React, { useEffect, useState } from "react";
import "../styles/WeaponList.css";
import { disableButtons } from "../Functions/disableButtons";


const WeaponList = (props) => {
  const commandGroupUnit = props.unitList[props.id];

  const findCommonElements = (arr1, arr2) => {
    const index = arr1.some((item) => arr2.includes(item))

    return index;
  };
  const [checked, setChecked] = useState(
    commandGroupUnit.commandGroup ? commandGroupUnit : ""
  );

  const [isCommandGroup, setCommandGroup] = useState(
    props.unitList[props.id].rules.includes("Chorążowie & sygnaliści")
  );

  const unitArray = Array.from(document.querySelectorAll(".unit"));

  useEffect(() => {
    const numberOfShootingWeaponsArray = [];
    const numberOfCloseCombatWeaponsArray = [];

    unitArray.forEach((item, index) => {
      const shootingWeapons = document.querySelectorAll(
        `div.unit[id='${String(index)}'] ul[class='1'] li input`
      );
      const shootingWeaponsArray = Array.from(shootingWeapons);
      const number1 = shootingWeaponsArray.filter(
        (item) => item.checked === true
      ).length;
      numberOfShootingWeaponsArray.push(number1);

      if (number1 >= 2) {
        shootingWeaponsArray.forEach((item) => {
          if (item.checked === false) {
            item.disabled = true;
          }
        });
      } else {
        shootingWeaponsArray.forEach((item) => {
          if (item.checked === false) {
            item.disabled = false;
          }
        });
      }

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
  });

  useEffect(() => {
    unitArray.forEach((item, index) => {
      disableButtons("Zbroja", index);
      disableButtons("Tarcza", index);
      disableButtons("Choice", index);
    });
  });

  const handleWeaponListClick = (e) => {
    const unit = props.unitList[e.target.className];
    const equipmentList = props.unitList[e.target.className].optionalEquipment;

    if (equipmentList.includes(e.target.name)) {
      equipmentList.splice(equipmentList.indexOf(e.target.name), 1);
    } else {
      equipmentList.push(e.target.name);
    }

    unit.cost = e.target.checked
      ? unit.cost + Number(e.target.value)
      : unit.cost - Number(e.target.value);

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

    const newUnitList = [...props.unitList];
    props.setUnitList(newUnitList);
  };

  const handleCommandGroupClick = (e) => {
    const commandGroupButton = document.querySelector(
      `div[id='${props.id}'] input[name='command-group-checkbox']`
    );

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

    setChecked(commandGroupButton.checked);
    const unit = props.unitList[e.target.className];
    unit.commandGroup = commandGroupButton.checked;
    const equipmentList = props.unitList[e.target.className].optionalEquipment;

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

    unit.number = unit.commandGroup ? 2 : props.heroes[unit.unitName].number;

    const newUnitList = [...props.unitList];
    props.setUnitList(newUnitList);
  };

  const equipmentTypeArr = [{}, {}, {}, {}];
  const equipmentTypeNames = [
    "Broń do walki wręcz",
    "Broń dystansowa",
    "Pancerz",
    "Specjalne",
  ];

  Object.keys(props.heroEquipment).forEach((item) => {
    equipmentTypeArr[props.heroEquipment[item][1]][item] =
      props.heroEquipment[item];
  });

  return (
    <div className="equipment-list-container">
      <div className="equipment-list-name">
        {Object.keys(props.heroEquipment).length === 0 ? null : <h4>Lista ekiwpunku</h4>}
      </div>
      <div className="equipment-list">
        {equipmentTypeArr.map((item, indexMain) => {
          if (Object.keys(item).length > 0) {
            return (
              <div className="equipment-type-list">
                <h4>{equipmentTypeNames[indexMain]}</h4>
                <ul className={indexMain}>
                  {Object.entries(item).map(([key, value], index) => {
                    let keyArr = [];
                    if (key.includes("/")) {
                      keyArr = key.split("/");
                    } else {
                      keyArr = [key];
                    }
                    const isStartingEquipment = findCommonElements(
                      props.unitList[props.id].startingEquipment,
                      keyArr
                    );
                    return (
                      <li>
                        <span
                          style={{ marginRight: value[0] < 9 ? "15px" : "8.6px" }}
                        >{`${value[0]} zk `}</span>
                        <input
                          onClick={handleWeaponListClick}
                          checked={
                            props.unitList[props.id].optionalEquipment.includes(
                              key
                            ) || isStartingEquipment
                          }
                          data={value[2]}
                          name={key}
                          value={value[0]}
                          className={props.id}
                          key={index}
                          type="checkbox"
                          disabled={
                            props.unitList[props.id].startingEquipment.includes(
                              key
                            ) || isStartingEquipment
                          }
                          readOnly
                        ></input>
                        {key}
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
                  className={props.id}
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
                      className={props.id}
                      name="Chorąży"
                      checked={props.unitList[
                        props.id
                      ].optionalEquipment.includes("Chorąży")}
                      data="Dowodzenie"
                      readOnly
                    />
                    Chorąży
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className={props.id}
                      name="Sygnalista"
                      checked={props.unitList[
                        props.id
                      ].optionalEquipment.includes("Sygnalista")}
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
