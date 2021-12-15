import React, { useState, useRef } from "react";
import "./EditRecipe.css";

const EditRecipe = props => {
  const [formInputs, setFormInputs] = useState({});
  const [stepsArr, setSteps] = useState([]);
  const [ingredientsArr, setIngredientsArr] = useState([]);

  const ingredientName = useRef();
  const ingredientAmount = useRef();
  const ingredientUnit = useRef();
  const step = useRef();

  const { passNewRecipes, sendNewRecipe, toggle, formType } = props;

  const formInputsHandler = event => {
    setFormInputs(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const ingredientsHandler = () => {
    setIngredientsArr(prevState => {
      return [
        ...prevState,
        {
          name: ingredientName.current.value,
          amount: ingredientAmount.current.value,
          unit: ingredientUnit.current.value,
        },
      ];
    });
  };

  const stepsHandler = () => {
    setSteps(prevState => {
      return [...prevState, { description: step.current.value }];
    });
  };

  const onSubmitSteps = () => {
    stepsHandler();
  };

  const onSubmitIngredients = () => {
    ingredientsHandler();
  };

  const onSubmitNewRecipe = () => {
    setFormInputs(prevState => {
      return { ...prevState, steps: stepsArr, ingregdients: ingredientsArr };
    });
    passNewRecipes(formInputs);

    //this function should send the new recipe to the database, I am instead console.log-ing it
    // sendNewRecipe();
    console.log(formInputs);
  };

  const onSubmitEditRecipe = () => {
    //prev state should be the clicked on recipe, set up state
    setFormInputs(prevState => {
      return { ...prevState, steps: stepsArr, ingregdients: ingredientsArr };
    });
    passNewRecipes(formInputs);

    //this function should find the recipe in the database and edit it there, I am instead console.log-ing it
    // sendEditedRecipe();
  };

  const onCancel = () => {
    toggle();
  };

  return (
    <div>
      {formType === "new" ? (
        <div className="editTitle">Dodaj nov recept!</div>
      ) : (
        <div className="editTitle">Šta želiš da promeniš?</div>
      )}
      <form className="editForm">
        <label htmlFor="name" className="editLabel">
          Naziv recepta:
        </label>
        <input
          type="text"
          id="name"
          name="title"
          onChange={formInputsHandler}
          className="editInput"
        />
        <label htmlFor="desc" className="editLabel">
          Opis:
        </label>
        <textarea
          type="text"
          id="desc"
          name="description"
          onChange={formInputsHandler}
          className="editInput"
        ></textarea>
        <label htmlFor="pic" className="editLabel">
          Dodaj sliku:
        </label>
        <input
          type="file"
          id="pic"
          name="picture"
          onChange={formInputsHandler}
          className="editInput"
        />
        <label htmlFor="step" className="editLabel">
          Koraci:
        </label>
        <textarea
          type="text"
          id="step"
          name="description"
          ref={step}
        ></textarea>
        <button type="button" onClick={onSubmitSteps} className="editButton">
          Dodaj korak!
        </button>
        <div>Sastojci:</div>
        <label htmlFor="name" className="editLabel">
          Naziv:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={ingredientName}
          className="editInput"
        />
        <label htmlFor="amount" className="editLabel">
          Količina:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          ref={ingredientAmount}
          className="editInput"
        />
        <label htmlFor="unit" className="editLabel">
          Jedinica za meru:
        </label>
        <input
          type="text"
          id="unit"
          name="unit"
          ref={ingredientUnit}
          className="editInput"
        />
        <button type="button" onClick={onSubmitIngredients}>
          Dodaj sastojak!
        </button>
      </form>
      {formType === "new" ? (
        <button
          type="button"
          onClick={onSubmitNewRecipe}
          className="editButton2"
        >
          Dodaj recept!
        </button>
      ) : (
        <button type="button" className="editButton2">
          Izmeni recept!
        </button>
      )}
      <button type="button" onClick={onCancel} className="editButton2">
        Nazad!
      </button>
    </div>
  );
};

export default EditRecipe;
