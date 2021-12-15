import React, { useState, useRef } from "react";

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
        <h3>Dodaj nov recept!</h3>
      ) : (
        <h3>Šta želiš da promeniš?</h3>
      )}
      <form>
        <label htmlFor="name">Naziv recepta:</label>
        <input
          type="text"
          id="name"
          name="title"
          onChange={formInputsHandler}
        />
        <label htmlFor="desc">Opis:</label>
        <textarea
          type="text"
          id="desc"
          name="description"
          onChange={formInputsHandler}
        ></textarea>
        <label htmlFor="pic">Dodaj sliku:</label>
        <input
          type="file"
          id="pic"
          name="picture"
          onChange={formInputsHandler}
        />
        <label htmlFor="step">Koraci:</label>
        <textarea
          type="text"
          id="step"
          name="description"
          ref={step}
        ></textarea>
        <button type="button" onClick={onSubmitSteps}>
          Dodaj korak!
        </button>
        <h3>Sastojci:</h3>
        <label htmlFor="name">Naziv:</label>
        <input type="text" id="name" name="name" ref={ingredientName} />
        <label htmlFor="amount">Količina:</label>
        <input type="number" id="amount" name="amount" ref={ingredientAmount} />
        <label htmlFor="unit">Jedinica za meru:</label>
        <input type="text" id="unit" name="unit" ref={ingredientUnit} />
        <button type="button" onClick={onSubmitIngredients}>
          Dodaj sastojak!
        </button>
      </form>
      {formType === "new" ? (
        <button type="button" onClick={onSubmitNewRecipe}>
          Dodaj recept!
        </button>
      ) : (
        <button type="button">Izmeni recept!</button>
      )}
      <button type="button" onClick={onCancel}>
        Nazad!
      </button>
    </div>
  );
};

export default EditRecipe;
