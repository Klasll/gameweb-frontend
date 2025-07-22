import React from "react";

export default function Unit({ unit }) {
  if (!unit) {
    return <div className="unit empty"></div>;
  }

  return (
    <div className="unit">
      <img src={unit.image} alt={unit.name} />
      <div className="stats">
        <span>{unit.name}</span>
        <span>HP: {unit.hp}</span>
        <span>ATK: {unit.attack}</span>
      </div>
    </div>
  );
}
