import React from "react";

const Recipe = props => {
  const { title, description, edit } = props;
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <button type="button" onClick={edit}>
        Izmeni!
      </button>
      <button type="button">Obriši!</button>
    </div>
  );
};

export default Recipe;
