import React from "react";

function TechItem({ techs, onDelete }) {
  return (
    <li>
      {techs}
      <button type="button" onClick={onDelete}>
        Remover
      </button>
    </li>
  );
}

export default TechItem;
