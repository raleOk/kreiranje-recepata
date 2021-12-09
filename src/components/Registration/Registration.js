import React, { useState } from "react";

const Registration = props => {
  const [userInputs, setUserInputs] = useState({});

  const userInputsHandler = event => {
    setUserInputs(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    console.log(userInputs);
    props.data(userInputs);
    props.login();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Ime</label>
        <input
          id="name"
          type="text"
          onChange={userInputsHandler}
          name="firstName"
          required
        />

        <label htmlFor="surname">Prezime</label>
        <input
          id="surname"
          type="text"
          onChange={userInputsHandler}
          name="lastName"
          required
        />

        <label htmlFor="mail">E-mail</label>
        <input
          id="mail"
          type="email"
          onChange={userInputsHandler}
          name="email"
          required
        />

        <label htmlFor="pw">Lozinka</label>
        <input
          id="pw"
          type="password"
          onChange={userInputsHandler}
          name="password"
          required
        />

        <button type="submit">Napravi profil</button>
      </form>
    </div>
  );
};

export default Registration;
