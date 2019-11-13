import React from "react";
import PropTypes from "prop-types";

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

TechItem.defaultProps = {
  tech: "Oculto"
};

TechItem.propTypes = {
  techs: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
