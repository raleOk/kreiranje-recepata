import React from "react";
import List from "./List";

const RecipesList = props => {
  const { recipesData, newRecipe, edit } = props;
  return (
    <div>
      <List listData={recipesData} edit={edit} newRecipe={newRecipe} />
    </div>
  );
};

export default RecipesList;
