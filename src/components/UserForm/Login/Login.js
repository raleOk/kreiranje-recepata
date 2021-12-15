import React, { useState, useEffect } from "react";
import { urls } from "../../../fetchConfig/fetchConfig";
import useFetch from "../../../hooks/useFetch";
import "./Login.css";

const Login = props => {
  const [userData, setUserData] = useState({});
  const [jsonData, setJsonData] = useState([]);

  const { logIn, passData } = props;

  const { sendRequest } = useFetch();

  const userDataHandler = event => {
    setUserData(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  useEffect(() => {
    const jsonDataHandler = userObj => {
      setJsonData(userObj);
    };

    sendRequest(urls[0], false, jsonDataHandler);
  }, [sendRequest]);

  const foundUser = jsonData.find(u => {
    return u.password === userData.password;
  });

  const onSubmit = () => {
    for (let input in userData) {
      if (userData[input] === "") {
        alert("Fill out all the form inputs, please.");
        return;
      }
    }
    if (foundUser === undefined) {
      alert("User not found!");
      return;
    }
    if (foundUser.email !== userData.email) {
      alert("Incorrect email.");
      return;
    }
    logIn();
    passData(foundUser);
  };

  return (
    <div>
      <form className="logForm">
        <label htmlFor="mail" className="logLabel">
          E-mail:
        </label>
        <input
          type="email"
          id="mail"
          name="email"
          onChange={userDataHandler}
          className="logInput"
          required
        />
        <label htmlFor="pw" className="logLabel">
          Lozinka:
        </label>
        <input
          type="password"
          id="pw"
          name="password"
          onChange={userDataHandler}
          className="logInput"
          required
        />
        <button onClick={onSubmit} className="logButton">
          Uloguj se!
        </button>
      </form>
    </div>
  );
};

export default Login;
