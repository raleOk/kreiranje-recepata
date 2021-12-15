import React, { useState } from "react";
import { fetchConfig, urls } from "../../../fetchConfig/fetchConfig";
import useFetch from "../../../hooks/useFetch";
import "./Register.css";

const Register = props => {
  const [userInputs, setUserInputs] = useState({});

  const { logIn, passData } = props;

  const { sendRequest } = useFetch();

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
    sendRequest(urls[0], fetchConfig, passData);
    logIn();
  };
  return (
    <div>
      <form className="regForm">
        <label htmlFor="name" className="regLabel">
          Ime:
        </label>
        <input
          id="name"
          type="text"
          onChange={userInputsHandler}
          name="firstName"
          className="regInput"
          required
        />

        <label htmlFor="surname" className="regLabel">
          Prezime:
        </label>
        <input
          id="surname"
          type="text"
          onChange={userInputsHandler}
          name="lastName"
          className="regInput"
          required
        />

        <label htmlFor="mail" className="regLabel">
          E-mail:
        </label>
        <input
          id="mail"
          type="email"
          onChange={userInputsHandler}
          name="email"
          className="regInput"
          required
        />

        <label htmlFor="pw" className="regLabel">
          Lozinka:
        </label>
        <input
          id="pw"
          type="password"
          onChange={userInputsHandler}
          name="password"
          className="regInput"
          required
        />
        <button type="button" onClick={onSubmit} className="regButton">
          Registruj se!
        </button>
      </form>
    </div>
  );
};

export default Register;
