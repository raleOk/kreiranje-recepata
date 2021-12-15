import React from "react";
import Recipe from "./Recipe";

const List = props => {
  const { listData, newRecipe, edit } = props;
  return (
    <div>
      {listData.map(recipe => (
        <Recipe
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          edit={edit}
          //   picture={recipe.picture}
          //   steps={recipe.steps}
          //   ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default List;
