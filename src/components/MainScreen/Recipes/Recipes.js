import React, { useState, useEffect } from "react";
import RecipesList from "./RecipesList/RecipesList";
import EditRecipe from "./EditRecipe/EditRecipe";
import useFetch from "../../../hooks/useFetch";
import { fetchConfig, urls } from "../../../fetchConfig/fetchConfig";

const Recipes = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("new");

  //stores the new recipe object, created in EditRecipe
  const [newRecipesData, setNewRecipesData] = useState({});

  //is used on first render by useEffect
  const [recipesData, setRecipesData] = useState([]);

  const { sendRequest } = useFetch();

  useEffect(() => {
    const recipeDataHandler = recipesList => {
      setRecipesData(recipesList);
    };
    sendRequest(urls[1], false, recipeDataHandler);
  }, [sendRequest]);

  const showFormHandler = () => {
    setShowForm(prevState => {
      return !prevState;
    });
  };
  const formTypeEdit = () => {
    setFormType("edit");
    setShowForm(prevState => {
      return !prevState;
    });
  };

  const onEdit = event => {
    formTypeEdit();
    //pass the list element you clicked on here
    console.log(event.target.value);
  };

  const formTypeNew = () => {
    setFormType("new");
    setShowForm(prevState => {
      return !prevState;
    });
  };

  const newRecipesHandler = obj => {
    setNewRecipesData(obj);
  };

  //this is the function that would send the new recipe to the database
  const sendNewRecipe = () => {
    fetchConfig.body = newRecipesData;
    sendRequest(urls[1], fetchConfig, setRecipesData);
  };

  return (
    <div>
      <RecipesList
        recipesData={recipesData}
        edit={onEdit}
        newRecipe={newRecipesData}
      />
      {showForm ? (
        <EditRecipe
          toggle={showFormHandler}
          passNewRecipes={newRecipesHandler}
          sendNewRecipe={sendNewRecipe}
          formType={formType}
        />
      ) : (
        <button type="button" onClick={formTypeNew}>
          Dodaj nov recept!
        </button>
      )}
    </div>
  );
};

export default Recipes;
