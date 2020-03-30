import React from "react";
import "./card-list.style.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {" "}
      {props.monsters.map(mons => (
        <h1 key={mons.id}> {mons.name}</h1>
      ))}
    </div>
  );
};
