import React, { useState } from "react";
import fetchConfig from "../../../fetchConfig/fetchConfig";
import useFetch from "../../../hooks/useFetch";

const Register = props => {
  const [userInputs, setUserInputs] = useState({});

  const { sendRequest } = useFetch(fetchConfig, props.passData);

  const userInputsHandler = event => {
    setUserInputs(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = () => {
    for (let input in userInputs) {
      if (userInputs[input] === "") {
        alert("Fill out all the form inputs, please.");
        return;
      }
    }
    if (
      userInputs.firstName.trim().length <= 2 ||
      userInputs.password.trim().length <= 6
    ) {
      alert("First Name/Password too short!");
      return;
    }
    fetchConfig.body = userInputs;
    sendRequest();
    props.logIn();
  };
  return (
    <div>
      <form>
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
      </form>
      <button type="button" onClick={onSubmit}>
        Registruj se!
      </button>
    </div>
  );
};

export default Register;
