import React from "react";
import "./Recipe.css";

const Recipe = props => {
  const { title, description, edit } = props;
  return (
    <div>
      <div className="recipeContainer">
        <div className="recipeInfo">Naziv recepta: {title}</div>
        <div className="recipeInfo">Opis recepta: {description}</div>
        <button type="button" onClick={edit} className="recipeButton">
          Izmeni!
        </button>
        <button type="button">Obriši!</button>
      </div>
    </div>
  );
};

export default Recipe;
