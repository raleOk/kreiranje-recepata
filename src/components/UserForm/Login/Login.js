import React, { useState, useEffect } from "react";
import { urls } from "../../../fetchConfig/fetchConfig";
import useFetch from "../../../hooks/useFetch";

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
      <form>
        <label htmlFor="mail">E-mail:</label>
        <input
          type="email"
          id="mail"
          name="email"
          onChange={userDataHandler}
          required
        />
        <label htmlFor="pw">Lozinka:</label>
        <input
          type="password"
          id="pw"
          name="password"
          onChange={userDataHandler}
          required
        />
      </form>
      <button onClick={onSubmit}>Uloguj se!</button>
    </div>
  );
};

export default Login;
