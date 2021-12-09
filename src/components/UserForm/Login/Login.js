import React, { useState } from "react";

const Login = props => {
  const [userData, setUserData] = useState({});

  const setUserDataHandler = event => {
    setUserData(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = () => {
    console.log(userData);
    props.logIn();
  };
  return (
    <div>
      <form>
        <label htmlFor="mail">E-mail</label>
        <input
          type="email"
          id="mail"
          name="email"
          onChange={setUserDataHandler}
          required
        />
        <label htmlFor="pw">Password</label>
        <input
          type="password"
          id="pw"
          name="password"
          onChange={setUserDataHandler}
          required
        />
      </form>
      <button onClick={onSubmit}>Uloguj se!</button>
    </div>
  );
};

export default Login;
