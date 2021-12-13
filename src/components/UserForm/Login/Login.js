import React, { useState, useEffect } from "react";
import fetchConfig from "../../../fetchConfig/fetchConfig";
import useFetch from "../../../hooks/useFetch";

const Login = props => {
  const [userData, setUserData] = useState({});
  const [jsonData, setJsonData] = useState([]);

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

    sendRequest({ url: fetchConfig.url }, jsonDataHandler);
  }, [sendRequest]);

  const onSubmit = () => {
    const result = jsonData.find(u => {
      return u.password === userData.password;
    });
    if (result === undefined) {
      alert("User not found!");
      return;
    }
    if (result.email !== userData.email) {
      alert("Incorrect email.");
      return;
    }
    props.logIn();
    props.passData(result);
  };

  return (
    <div>
      <form>
        <label htmlFor="mail">E-mail</label>
        <input
          type="email"
          id="mail"
          name="email"
          onChange={userDataHandler}
          required
        />
        <label htmlFor="pw">Password</label>
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
