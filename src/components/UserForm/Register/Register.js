import React, { useState } from "react";

const Register = props => {
  const [userInputs, setUserInputs] = useState({});

  const userInputsHandler = event => {
    setUserInputs(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = () => {
    const url = "http://localhost:8000/users";
    const fetchParams = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInputs),
    };

    fetch(url, fetchParams)
      .then(data => {
        return data.json();
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    props.logIn();
    props.passData(userInputs);
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
