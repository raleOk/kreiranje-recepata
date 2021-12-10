import React, { useState, useEffect } from "react";

const Login = props => {
  const [userData, setUserData] = useState({});
  const [jsonData, setJsonData] = useState([]);

  const setUserDataHandler = event => {
    setUserData(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setJsonData(data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const onSubmit = () => {
    const result = jsonData.find(u => {
      return u.password === userData.password;
    });
    if (result === undefined) {
      alert("User not found!");
    } else {
      props.logIn();
      props.passData(result);
    }
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
